import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { MainProvider } from '../../providers/main/main';
import { Etudiant } from '../../providers/main/etudiant';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  etudiants: Etudiant[];
  etudiant : Etudiant;
  granted: boolean;
  denied: boolean;
  scanned: boolean;
  tagId: string;
  type:Number=1
  carteValid: boolean;
  etuExist: Etudiant;
  tarif:number
  heure: string;

  constructor(public navCtrl: NavController,
    private nfc: NFC, private mp:MainProvider ) {

    this.resetScanData()
    this.getEtudiants();
    this.tarif=0


  }

  resetScanData() {
    this.granted = false;
    this.scanned = false;
    this.tagId = "";
    this. carteValid   = false;
  }

  ionViewDidEnter() {


    this.nfc.enabled().then((resolve) => {

        this.addListenNFC();








    }).catch((reject) => {
      alert("NFC is not supported by your Device");




    });
  }

  addListenNFC() {

    this.nfc.addTagDiscoveredListener(nfcEvent => this.sesReadNFC(nfcEvent.tag)).subscribe(data => {
     // this.defTime()
      if (data && data.tag && data.tag.id) {
        this.getEtudiants()
        let tagId = this.nfc.bytesToHexString(data.tag.id);
        if (tagId) {

          this.tagId = tagId;
          this.scanned = true;
          if(tagId=="49990a6d"){
            this.granted = true
            setTimeout(() => {
              this.granted = false

            }, 500);
          }
          else{
            this.granted = false
          }
         /*  this.etuExist =  this.etudiants.find(function(e) {
            return e.numCarte== tagId ;
          });*/
       /*   if(this.etuExist ){


            this.carteValid=true
            if(this.etuExist.solde>100){
              this.granted = true
              this.mp.solde(this.etuExist.id,this.etuExist.solde,this.tarif).then(data=>{
                this.granted=true
            })
            }else{
              this.granted = false

            }
          }
          else{
            this.carteValid=false

          }*/





        } else {
          alert('NFC_NOT_DETECTED');
        }
      }
    });
  }

  sesReadNFC(data): void {

  }

  failNFC(err) {
    alert("Error while reading: Please Retry");
  }
  getEtudiants(){

      this.mp.getEtudiants().then(data=>{


     this.etudiants=data as Etudiant[]

    })




  }
  /*defTime(){
    var now= new Date().toLocaleTimeString();
    console.log( now.split(':'));
   this.heure=now.split(':')[1]
     var h=parseInt(this.heure);
    if(h>=6 && h<=10){
      this.tarif=50
      console.log(this.tarif)

    }
    else if(h>=11 && h<=14){
      this.tarif=100
      console.log("agne.com")
    }
    else if(h>=11 && h<=16){
      this.tarif=100
      console.log("rere.com")
    }

  }*/
  }
