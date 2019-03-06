import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform , ModalController} from 'ionic-angular';
import { SplashPage } from '../../pages/splash/splash';
import { ViewController } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tab;
  row1=-1; row2=-1;
  score1=[];
  score2=[]
  t1;t2
  id1;id2;c=0
public tab1:any=[
  [
    {
      id:1,
      row:1
      ,team:1,
      star:1



    },{
      id:2,
      row:1
      ,team:1,
      star:1



    }
    ,{
      id:3,
      row:1
      ,team:1,
      star:1



    }
    ,{
      id:4,
      row:1
      ,team:1,
      star:1



    }
    ,{
      id:5,
      row:1
      ,team:1,
      star:1



    }
  ], [
    {
      id:6,
      row:2
      ,team:1
      ,
      star:0,

    },{
      id:7,
      row:2
      ,team:1,
      star:0



    }
    ,{
      id:8,
      row:2
      ,team:1,
      star:0


    }
    ,{
      id:9,
      row:2
      ,team:1,
      star:0

    }
    ,{
      id:10,
      row:2
      ,team:1,
      star:0,


    }
  ], [
    {
      id:11,
      row:3
      ,team:1,
      star:0


    },{
      id:12,
      row:3
      ,team:1,
      star:0


    }
    ,{
      id:13,
      row:3
      ,team:-1,
      star:0

    }    ,{
      id:14,
      row:3
      ,team:2,
      star:0


    }
    ,{
      id:15,
      row:3
      ,team:2,
      star:0

    }
  ]
  , [
    {
      id:16,
      row:4
      ,team:2,
      star:0

    },{
      id:17,
      row:4
      ,team:2,
      star:0

    }
    ,{
      id:18,
      row:4
      ,team:2,
      star:0

    },
    {
      id:19,
      row:4
      ,team:2

    },
    {
      id:20,
      row:4
      ,team:2,
      star:0

    }
  ]
  , [
    {
      id:21,
      row:5
      ,team:2,
      star:-1

    },{
      id:22,
      row:5
      ,team:2,
      star:-1

    }
    ,{
      id:23,
      row:5
      ,team:2,
      star:-1

    },
    {
      id:24,
      row:5
      ,team:2,
      star:-1

    },
    {
      id:25,
      row:5
      ,team:2,
      star:-1

    }
  ]

]
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public viewCtrl: ViewController) {

  }
ionViewDidLoad()
{

this.tab=this.tab1


}
cli(row,id,team){




    this.c++


  if(this.row1==-1)
  {
    this.row1=row;
    this.id1=id
    this.t1=team
    if(this.t1==-1){
      this.reset()
    }


  }
  if(this.row1!==-1 && this.c==2){
    this.row2=row;
    this.id2=id
    this.t2=team

    if(this.t2!=-1){
      this.reset()
    }
    //dame hori
    if(this.row1==this.row2 && this.t1!=this.t2 && this.t1!=-1  && this.t2==-1 && (this.finds(this.id1).star==-1 || this.finds(this.id1).star==1))
    {
       let n=Math.abs(this.id2 - this.id1)-1
       let npions=0
       let Id

       if(this.id1>this.id2){
        this.tab.forEach(e => {
          e.forEach(e1 => {
            if(e1.row==this.row1 && e1.id>this.id2 &&e1.id<this.id1 && e1.team!=-1)
            {
                npions=npions+1
                Id=e1.id
            }

          });

        });
        if(npions==0){
          this.finds(this.id2).team= this.finds(this.id1).team
          this.finds(this.id2).star= this.finds(this.id1).star

          this.finds(this.id1).team=-1;
        }
        else if(npions>1){
          this.reset()
        }
        else if(npions==1){
          this.finds(this.id2).team= this.finds(this.id1).team
          this.finds(this.id2).star= this.finds(this.id1).star
          this.finds(this.id1).team=-1;
          this.finds(Id).team=-1;

        }

       }else{
        this.tab.forEach(e => {
          e.forEach(e1 => {
            if(e1.row==this.row1 && e1.id<this.id2 && e1.id>this.id1  && e1.team!=-1)
            {
              npions=npions+1
              Id=e1.id


            }

          });

        });
        if(npions==0){
          this.finds(this.id2).team= this.finds(this.id1).team
          this.finds(this.id2).star= this.finds(this.id1).star

          this.finds(this.id1).team=-1;
        }
        else if(npions>1){
          this.reset()
        }
        else if(npions==1){
          this.finds(this.id2).team= this.finds(this.id1).team
          this.finds(this.id2).star= this.finds(this.id1).star
          this.finds(this.id1).team=-1;
          this.finds(Id).team=-1;

        }

       }



    }


    if( this.row2== this.row1 && Math.abs(this.id2 - this.id1)/2==1 && this.t1!=this.t2 && this.t1!=-1)
    {


       let mId=Math.min(this.id2 ,this.id1)+1
         console.log(mId)
         this.tab.forEach(e => {
           e.forEach(e1 => {
             if(e1.id==mId && e1.team!=-1 && e1.team!=this.t1){


               e1.team=-1
              e.filter(item => item.id ==Number(this.id1 ))[0].team=-1
              e.filter(item => item.id ==this.id2 )[0].team=this.t1
              if(this.t1==2){
                this.score2.push("x")

              }
              if(e1.team ==-1){
                this.row1=-1
                this.c=0

              }
              if(this.t1==1 ){
                this.score1.push("x")

              }



             } if(this.t1==-1){
              this.reset()
             }

           });

         });
    }


    if(this.row1!=this.row2  || this.row1 ==this.row2 )
    {
             // let x= e.filter(item => item.id ===this.id1 )[0].team

      this.tab.forEach(e => {

       e.forEach(e2 => {
       // let x= e.filter(item => item.id ===this.id1 )[0].team
        //let y= e.filter(item => item.id ==this.id2 )[0].team()

       /// console.log(e.filter(item => item.id ==this.id1 )[0].team)

         if(e2.id==this.id2  ){
           if(e2.team==-1)
           {
            if(Math.abs(this.id2 - this.id1)==2  ){
              this.reset()

             }
             else if(Math.abs(this.id2 - this.id1)==10 ){

                  this.reset()


             }



             else{

             this.tab.forEach(e => {

              e.forEach(e1 => {
         if((e1.id==this.id1 && e1.team==1 && e1.id<e2.id ) || (e1.id==this.id1 && e1.team==2 && e1.id>e2.id) ||(e1.id==this.id1 && this.row1 ==this.row2 )  && (Math.abs(this.id2 - this.id1)==5 ||Math.abs(this.id2 - this.id1)==1)  ){

             e2.team=e1.team
             e1.team=-1

             this.reset()

       }






              });  });}


           }else{
            this.reset()

           }

         }

       });




        // e.filter(item => item.id ==this.id2 )[0].team=e.filter(item => item.id ==this.id1 )[0].team
        /// e.filter(item => item.id ==this.id1 )[0].team=-1


        });


    }
     if(this.row1!=this.row2 && (Math.abs(this.id2 - this.id1)==10 || Math.abs(this.id2 - this.id1)==5) && this.t1!=this.t2){


       if(Math.abs(this.id2 - this.id1)==10)
       {
        let mId=Math.min(this.id2 ,this.id1)+5
        console.log(mId)
       this.tab.forEach(e => {

         e.forEach(e1 => {

           if(e1.id==mId && e1.team!=-1){
            if(e1.team==this.t1){
              this.reset()

            }
            else{
            this.tab.forEach(e => {
              e.forEach(e2 => {


                if(e2.id==this.id1){



                  if(this.t1==1 ){
                    if(this.id1<this.id2){
                      this.foreach(this.id2,e2.team)
                      e1.team=-1
                      e2.team=-1
                      e1.star=1
                      this.score1.push("x")
                      this.reset()

                    }else if(this.id1>=this.id2 && e2.star==-1){

                     this.foreach(this.id2,e2.team)
                     e1.team=-1
                     e2.team=-1
                      this.score1.push("x")
                      this.reset()

                    }
                    else{
                      this.reset()
                    }


                  }
                  else if(this.t1==2 ){
                    if(this.id1>this.id2){
                      this.foreach(this.id2,e2.team)
                      e1.team=-1
                      e2.team=-1
                     this.score2.push("x")
                     this.reset()

                    }else if(this.id1<=this.id2 && e2.star==1){
                      this.foreach(this.id2,e2.team)
                      e1.team=-1
                      e1.star=1
                      e2.team=-1
                     this.score2.push("x")
                     this.reset()

                    }
                    else{

                      this.reset()
                    }



                  }


                }


              });

            });}



           }

         });

       });
       }



     }

  }


}
    foreach(id,team){
      this.tab.forEach(e => {
        e.forEach(e1 => {
          if(e1.id==id){
           e1.team=team
          }

        });
      })
    }
    reset()
    {
      this.row1=-1
      this.c=0
    }
    finds(id){
      let el
      this.tab.forEach(e => {
        e.forEach(e1 => {
          if(e1.id==id){
         el=e1
          }

        });


      })
      return  el
    }
    modal()
    {

       let splash = this.modalCtrl.create(SplashPage );
       splash.present();

      setTimeout(() => {
        this.viewCtrl.dismiss();
      }, 6000);



    }
}

