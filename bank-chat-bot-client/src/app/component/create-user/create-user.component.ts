import { Component, OnInit } from '@angular/core';
import {AppConstants} from "../../app-constants";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Address} from "../../model/Address";
import {User} from "../../model/User";
import {FieldError, getFormErrors} from "../../model/FieldError";
import {UserService} from "../../service/user.service";
import {AlertService} from "../../service/alert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'createUser',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  readonly LABEL = AppConstants;
  userForm: FormGroup | undefined;
  private userData: any | undefined;
  formErrors: any[] | undefined;
  formErrorsStr: string | undefined;
  options = {
    autoClose: true
  };

  constructor(private builder: FormBuilder,
              private userService : UserService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit(): void {
    this.createEmployeeForm();
  }

  isValidControl(controlName : String){
    // @ts-ignore
    return this.employeeForm?.controls[controlName].valid;

  }

  createEmployeeForm() {
    this.userForm = this.builder.group({
      firstName: ['', Validators.required ],
      lastName:['', Validators.required ],
      middleName:new FormControl(),

      age: ['', Validators.required ],
      contactNumber: ['', Validators.required ],
      emailId: ['', Validators.required ],

      accessKey: ['', Validators.required ],
      aadharNumber: ['', Validators.required ],
      address: this.builder.group({ // make a nested group
        state: ['', Validators.required],
        district: ['', Validators.required],
        city: ['', Validators.required],
        pincode: ['', Validators.required],
        addressLine1: ['', Validators.required],
        addressLine2: ['', Validators.required],
        landMark: ['', Validators.required]
      }),

    })
    //address: Address;
  }

  cancleUserSave() {

  }

  saveuser() {
    var userData: User = this.userForm?.value
    let errors: FieldError[] = this.validateUserDetails();
    this.formErrors = this.customValidation(userData, errors);

    if(errors.length === 0){
      this.userService.createUser(userData).subscribe(userData => {
          this.userData= userData;
          // @ts-ignore
          var formData: FormData = new FormData();
          this.alertService.success(('Employee ' + this.userData.firstName + ' ' + this.userData.lastName + " saved successfully..."), this.options)
        this.router.navigate(['/login']);
        }, error => {
          console.log("error", error)
          this.alertService.error(('Error while saving employee...'), this.options);
        }, () => {
        }
      )
    }else{
      this.formErrors.join(this.LABEL.NEWLINE)
      this.formErrorsStr = (this.LABEL.MISSING_FIELDS + this.LABEL.NEWLINE+ this.formErrors.join(this.LABEL.NEWLINE));
      setTimeout(() => this.formErrors=[], this.LABEL.ERROR_MESSAGE_TIMEOUT);
    }

  }

  validateUserDetails(){
    let errors: FieldError[] = []
    // @ts-ignore
    return getFormErrors(this.userForm?.root, "user", "", errors);
  }

  private customValidation(userData: User, errors: FieldError[]) {
    var formErrors: string[] = [];
    var errorCount = 1;
    var hasContactNumberErr =false;


    errors.forEach(err => {
      if(err.fieldName  === 'firstName'){
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_ERR_FIRST_NAME);
        errorCount++;
      }
      if(err.fieldName  === 'lastName'){
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_ERR_LAST_NAME);

        errorCount++;
      }

      if(err.fieldName  === 'middleName'){
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_ERR_MIDDLE_NAME);
        errorCount++;
      }

      if(err.fieldName  === 'age'){
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_ERR_DOB);
        errorCount++;
      }

      if(err.fieldName  === 'aadharNumber'){
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_ERR_AADHAR_NUMBER);
        errorCount++;
      }

      if(err.fieldName  === 'contact'){
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_ERR_CONTACT_NUMBER);
        errorCount++;
        hasContactNumberErr =true;
      }
    });

    return formErrors;
  }
}
