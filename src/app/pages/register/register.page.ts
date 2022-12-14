import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegisterServService, Usuario } from '../../services/register-serv.service';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegistro: FormGroup;
  newUser: Usuario=<Usuario>{};
  usuarios: Usuario[]=[];

  constructor( private alertController: AlertController,
               private navController: NavController,
               private registerServ:RegisterServService,
               private toastController: ToastController,
               private fb: FormBuilder,
               private router:Router)
              {
                this.formRegistro= this.fb.group({
                  'nombre':new FormControl("",Validators.required),
                  // 'correo':new FormControl("",[Validators.required, Validators.email]),
                  'correo':new FormControl("",Validators.required),
                  'carrera':new FormControl("",Validators.required),
                  'rut':new FormControl("",Validators.required),
                  'isProfesor' : new FormControl(Boolean,Validators.required),
                  'password' : new FormControl("",Validators.required),
                  'confPass' : new FormControl("",Validators.required),
                  // 'password':new FormControl("",Validators.compose([
                  //   Validators.required,
                  //   Validators.minLength(2),
                  //   Validators.maxLength(12),
                  // ])),
                  // 'confPass':new FormControl("",Validators.compose([
                  //   Validators.required,
                  //   Validators.minLength(2),
                  //   Validators.minLength(12),
                  // ])),
                });
               }

  ngOnInit() {
  }

  async CreateUser(){
    var form=this.formRegistro.value;
    var exist = 0;
      console.log(this.formRegistro);
      if (this.formRegistro.invalid){
        this.alertInvalidForm();
      }

      else{
        this.newUser.nomUsuario = form.nombre;
        this.newUser.correoUsuario = form.correo;
        this.newUser.passUsuario = form.password;
        this.newUser.repassUsuario = form.confPass;
        this.newUser.carreraUsuario = form.carrera;
        this.newUser.rutUsuario = form.rut;
        this.newUser.usuarioProfesor = form.isProfesor;

        this.registerServ.getUser().then(dato=>{
          this.usuarios = dato;

          if (!dato || dato.length==0){
            this.registerServ.addUser(this.newUser).then(data=>{
              this.newUser=<Usuario>{};
              this.showToast('Usuario creado correctamente');
            });
            this.formRegistro.reset();
            this.navController.navigateRoot('login');
          }else{
            for(let obj of this.usuarios){
              if (this.newUser.correoUsuario == obj.correoUsuario){
                exist =1;
                }
            }
              if (exist ==1 ){
                this.alertCorreoDuplicado();
                this.formRegistro.reset();
              }
              else{
                this.registerServ.addUser(this.newUser).then(data=>{
                  this.newUser=<Usuario>{};
                  this.showToast('Usuario creado correctamente');
                });
                this.formRegistro.reset();
                this.navController.navigateRoot('login');
              }


          }
            
          
        })
        
      }
  }//metodo 


async alertInvalidForm(){
  const alert = await this.alertController.create({
    header: 'Error',
    message:'Debes completar los campos obligatorios',
    buttons: ['Aceptar']
  })
  await alert.present();
}

async alertCorreoDuplicado(){
  const alert = await this.alertController.create({
    header: 'Error',
    message:'El correo ingresado ya existe',
    buttons: ['Aceptar']
  })
  await alert.present();
}

 async showToast(msg){
   const toast = await this.toastController.create({
     message:msg,
     duration: 2000
   })
   await toast.present();
 }



  // usuario={
  //   nombre:'',
  //   email:'',
  //   password:'',
  //   carrera:'',
  // }

  // onSubmit(){
  //   console.log('submit');
  //   console.log(this.usuario)
  // }

}
