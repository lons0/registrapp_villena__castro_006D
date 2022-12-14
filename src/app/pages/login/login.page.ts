import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { RegisterServService, Usuario } from '../../services/register-serv.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin : FormGroup;
  user: Usuario[]=[];

  constructor(
              private alertController: AlertController,
              private navController: NavController,
              private registerServ: RegisterServService,
              private fb: FormBuilder)
              {
                this.formLogin= this.fb.group({
                  'correo' : new FormControl("", Validators.required),
                  'password' : new FormControl ("", Validators.required)      
                })
              }

  ngOnInit() {
  }

  async Ingesar(){
    var f = this.formLogin.value;
    var a =0;
    this.registerServ.getUser().then(datos =>{
      this.user = datos;
      if (!datos || datos.length==0){
        return null;
      }
      for (let obj of this.user){
        if (f.correo== obj.correoUsuario &&  f.password == obj.passUsuario){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado','true');
          localStorage.setItem('isProfesor',obj.usuarioProfesor+'');
          console.log('isProfesor');
          this.navController.navigateRoot('inicio');
          // this.appComponent.isLogin=true;
        }
      }
      console.log(a);
      if(a==0){
        this.alertMsg();
      }
    });
  }

  async alertMsg(){
    const alert=await this.alertController.create({
      header:'Error...',
      message: 'datos ingresados no son correctos',
      buttons:['Aceptar']
    })
    await alert.present();
    return;
  }


  async clearStorage(){
    this.registerServ.clr
  }


  // usuario={
  //   email:'',
  //   password:'',
  // }

  // onSubmit(){
  //   console.log('submit');
  //   console.log(this.usuario)
  // }

}
