import {Component, OnInit, ViewChild} from '@angular/core';
import {AppConstants} from "../../app-constants";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Address} from "../../model/Address";
import {User} from "../../model/User";
import {FieldError, getFormErrors} from "../../model/FieldError";
import {UserService} from "../../service/user.service";
import {AlertService} from "../../service/alert.service";
import {Router} from "@angular/router";
import {NotificationsAlertComponent} from "../notifications-alert/notifications-alert.component";
import {CustomValidators} from "../../Validator/number";

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
              private userService: UserService,
              private alertService: AlertService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createEmployeeForm();
  }

  @ViewChild(NotificationsAlertComponent) private notificationsAlert: NotificationsAlertComponent;

  isValidControl(controlName: String) {
    // @ts-ignore
    return this.employeeForm?.controls[controlName].valid;

  }

  createEmployeeForm() {
    debugger;
    this.userForm = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: new FormControl(),
      age: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      contactNumber:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{12}$")]],
      emailId: ['',  Validators.required,Validators.email],

      accessKey: ['', Validators.required],
      aadharNumber:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{12}$")]],
      address: this.builder.group({ // make a nested group
        state: ['', Validators.required],
        district: ['', Validators.required],
        city: ['', Validators.required],
        pincode: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")]],
        addressLine1: ['', Validators.required],
        addressLine2: new FormControl(),
        landMark: ['', Validators.required]
      }),

    })
    //address: Address;
  }

  cancleUserSave() {
    this.router.navigate(['/login']);
  }

  saveuser() {
    var userData: User = this.userForm?.value
    let errors: FieldError[] = this.validateUserDetails();
    this.formErrors = this.customValidation(userData, errors);
debugger;
    if (errors.length === 0) {
      this.userService.createUser(userData).subscribe(userData => {
          this.userData = userData;
          var formData: FormData = new FormData();
          debugger

          this.notificationsAlert.successeNotification({
            message: "User created successfully",
            title: "Please Login to continue"
          });
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 5000);

        }, error => {
          this.alertService.error(('Error while saving employee...'), this.options);
          this.notificationsAlert.errorNotification({message: 'Error while creating user...', title: "Error"});
        }, () => {
        }
      )
      this.notificationsAlert.errorNotification({
        message: "User created successfully",
        title: ("Welcome " + this.userData.firstName + " " + this.userData.lastName)
      });
    } else {
      this.notificationsAlert.errorNotification({
        message: this.formErrors.join(this.LABEL.NEWLINE),
        title: this.LABEL.MISSING_FIELDS
      });
    }

  }

  validateUserDetails() {
    let errors: FieldError[] = []
    // @ts-ignore
    return getFormErrors(this.userForm?.root, "user", "", errors);
  }

  private customValidation(userData: User, errors: FieldError[]) {
    var formErrors: string[] = [];
    var errorCount = 1;
    var hasContactNumberErr = false;


    errors.forEach(err => {
      if (err.fieldName === 'firstName') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_ERR_FIRST_NAME);
        errorCount++;
      }
      if (err.fieldName === 'lastName') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_ERR_LAST_NAME);

        errorCount++;
      }

      if (err.fieldName === 'middleName') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_ERR_MIDDLE_NAME);
        errorCount++;
      }

      if (err.fieldName === 'age') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_AGE + " (should be of length 2)");
        errorCount++;
      }

      if (err.fieldName === 'emailId') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_EMAIL_ID + "(check for format)");
        errorCount++;
      }

      if (err.fieldName === 'contact') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_ERR_CONTACT_NUMBER + "(should be of length 10)");
        errorCount++;
        hasContactNumberErr = true;
      }

      if (err.fieldName === 'state') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.PROFILE_STATE);
        errorCount++;
      }
      if (err.fieldName === 'district') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.PROFILE_DISTRICT);
        errorCount++;
      }
      if (err.fieldName === 'city') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.PROFILE_CITY);
        errorCount++;
      }

      if (err.fieldName === 'pincode') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.PROFILE_PINCODE + "(should be of length 6)");
        errorCount++;
      }
      if (err.fieldName === 'addressLine1') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.PROFILE_ADDRESS_LINE + " 1");
        errorCount++;
      }
      if (err.fieldName === 'landMark') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.PROFILE_CITY);
        errorCount++;
      }

      if (err.fieldName === 'aadharNumber') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.USER_ERR_AADHAR_NUMBER + " & should be of length 12");
        errorCount++;
      }

      if (err.fieldName === 'accessKey') {
        formErrors.push(errorCount + this.LABEL.DOT_SPACE + this.LABEL.PROFILE_CITY);
        errorCount++;
      }


    });

    return formErrors;
  }


}
