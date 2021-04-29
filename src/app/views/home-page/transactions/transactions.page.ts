import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {forkJoin, from} from 'rxjs';
import {filter} from 'rxjs/operators';
import {AgenceService} from '../../../service/agenceService/agence.service';
import {AuthService} from '../../../service/authService/auth.service';
import * as moment from 'moment';
import {AlertController, ModalController} from '@ionic/angular';

const TRANSACTION_URL = '/user/transactions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  usersAgence: {};
  transactions = [];
  transactionsTemp = [];
  total = [];
  page = 1;
  maximumPage: number;
  @Input() typeTransaction: string;
  @Input() currentModal;
  userFilter: any;
  isFilterMode = false;
  dateDepotFilter = '';
  typeFilter = '';
  dateRetraitFilter = '';
  dateStart: any;
  dateEnd: any;
  filterType = '';
  totalCommmission;

  constructor(private httpClient: HttpClient,
              private agenceService: AgenceService,
              private authService: AuthService,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController) {
    this.agenceService.getAgence().subscribe(res => {
      console.log(res['users']);
      this.usersAgence = res['users'];
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    if (this.typeTransaction === 'transactions') {
      this.getTransactionsByUser(this.authService.userData.getValue().id);
    }
    if (this.typeTransaction === 'all-transactions' || this.typeTransaction === 'commissions') {
      this.getTransactionsByUserCompte(this.authService.userData.getValue().id);
    }
  }

  getLastPage(res) {
    if (res['hydra:view'] !== undefined) {
      this.maximumPage = parseInt(res['hydra:view']['hydra:last'].slice(-1), 10);
    } else {
      this.maximumPage = 1;
    }
  }

  getAllTransactionsByCompte() {
    this.httpClient.get(environment.apiUrl + `/user/compte/transactions?page=${this.page}`)
      .subscribe(res => {
        this.getLastPage(res);
        this.transactions = this.transactions.concat(res['hydra:member']);
      });
  }

  getAllTransactionsByUserConnected(event?) {
    this.httpClient.get(environment.apiUrl + `/user/transactions?page=${this.page}`)
      .subscribe(res => {
        // console.log('res', res);
        this.getLastPage(res);
        this.transactions = this.transactions.concat(res['hydra:member']);
        // console.log(this.transactions);
        if (event) {
          event.target.complete();
        }

      });
  }

  loadMode(event) {
    // console.log(event);
    this.page++;
    this.getAllTransactionsByUserConnected(event);
    if (this.page === this.maximumPage) {
      console.log('page: ', this.page);
      console.log('maxPage: ', this.maximumPage);
      event.target.disable = true;
    }
  }

  filterData(name?, value?) {
    // tslint:disable-next-line:prefer-const
    let sourceFilter: any;
    // On transaforme le tableau en Observable
    const source = from(this.transactions);
    // TODO::On filtre l'observable
    source.subscribe(response => {
      switch (name) {
        case 'user':
          if (response.dateDepot) {
            sourceFilter = source.pipe(filter(transaction => transaction.userDepot.prenom + ' ' + transaction.userDepot.nom === value));
          }
          if (response.dateRetrait) {
            // tslint:disable-next-line:max-line-length
            sourceFilter = source.pipe(filter(transaction => transaction.userRetrait.prenom + ' ' + transaction.userRetrait.nom === value));
          }
          break;
      }
    });
    console.log(sourceFilter);
    sourceFilter.subscribe(val => {
      this.transactions = [];
      // console.log(this.transactions);
      this.transactions = this.transactions.concat(val);
    });
    // output: "Over 30: Joe"
  }

  onChangeFilter($event) {
    console.log($event.target.value);
  }

  getTransactionsByUser(id) {
    this.httpClient.get(`${environment.apiUrl}/user/${id}/transactions`)
      .subscribe(res => {
        this.transactions = [];
        this.total = res['montantTotal'];
        this.transactions = this.transactions.concat(res['transactions']);
        console.log(this.total);
        this.transactionsTemp = this.transactions.slice();
      }, error => {
        console.log(error);
      });
  }

  getTransactionsByUserCompte(id){
    this.httpClient.get(`${environment.apiUrl}/user/${id}/compte/transactions`)
      .subscribe(res => {
        this.transactions = [];
        this.total = res['montantTotal'];
        this.totalCommmission = res['totalCommission'];
        this.transactions = this.transactions.concat(res['transactions']);
        this.transactionsTemp = this.transactions.slice();
        console.log(this.transactions);
      }, error => {
        console.log(error);
      });
  }

  filterByTelephone(event: any) {
    const telephone = event.target.value;
    const depotData = this.httpClient.get(`${environment.apiUrl + TRANSACTION_URL}?userDepot.telephone=${telephone}`);
    const retraitData = this.httpClient.get(`${environment.apiUrl + TRANSACTION_URL}?userRetrait.telephone=${telephone}`);

    forkJoin([depotData, retraitData]).subscribe(res => {
      // console.log('res', res);
      this.transactions = [];
      res.map(value => {
        this.transactions = this.transactions.concat(value['hydra:member']);
      });
      console.log(this.transactions);
    });
    this.isFilterMode = true;
  }

  onChangeType(event: any) {
    this.filterType = event.target.value;
  }

  onDateStartChange(event: any) {
    this.dateStart = moment(event.target.value).format('M/D/YY');
    // console.log('start', this.dateStart);
  }

  onDateEndChange(event: any) {
    this.dateEnd = moment(event.target.value).format('M/D/YY');
    this.periodeFilter(this.dateStart, this.dateEnd);
  }

  periodeFilter(dateStart, dateEnd) {
    console.log(this.transactions);
    const source = from(this.transactions).pipe(filter(item => moment(item.date).format('M/D/YY') >= dateStart && moment(item.date).format('M/D/YY') <= dateEnd));
    this.transactions = [];
    source.subscribe(res => {
      this.transactions = this.transactions.concat(res);
    });
    if (this.transactions.length === 0) {
      this.alertCtrl.create({
        header: 'Aucune informations',
        message: `Il n'y a pas eu de transations entre le ${dateStart} et le ${dateEnd}`,
        buttons: ['D\'accord']
      }).then(alertEl => {
        alertEl.present().then(() => {
          this.transactions = this.transactionsTemp;
        });
      });
    }
  }
  funcUserFilter(id){
    const source = from(this.transactions).pipe(filter(item => item.idUser === id));
    this.transactions = [];
    source.subscribe(res => {
        this.transactions = this.transactions.concat(res);
    });
    if (this.transactions.length === 0 && this.userFilter !== '') {
      this.alertCtrl.create({
        header: 'Aucune informations',
        message: `Aucune transaction n'a été faite par cette utilisateur`,
        buttons: ['D\'accord']
      }).then(alertEl => {
        alertEl.present().then(() => {
          this.transactions = this.transactionsTemp;
        });
      });
    }
    if (this.userFilter === ''){
      this.transactions = this.transactionsTemp;
    }
  }
  dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
  onUserChange(event: any){
    this.userFilter = event.target.value;
    this.funcUserFilter(this.userFilter);
  }
}
