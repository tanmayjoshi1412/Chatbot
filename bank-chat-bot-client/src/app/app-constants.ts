import {FormControl, Validators} from "@angular/forms";

export class AppConstants {
  public static apiURL: string = "https://itsolutionstuff.com/";
  public static siteTitle: string = "Vikas Transports";
  public static DOT_SPACE: string = ". ";
  public static NEWLINE: string = "<br>";
  public static MISSING_FIELDS: string = "Please enter below missing fields:";
  public static ERROR_MESSAGE_TIMEOUT: number = 5000;

  //Menu COnstants
  public static MENU_IS_SLIDER: boolean = true;

  //Constants
  public static ACTIVE = "ACTIVE";
  public static INACTIVE = "INACTIVE";

  //Common
  public static EXPORT = "Export";
  public static SAVE: string = "Save";
  public static CLOSE: string = "Close";

  //Party Dashboard
  public static PARTY_DASHBOARD_TITLE: string = "Party Dashboard";
  public static PARTY_DASHBOARD_ADD_PARTY: string = "Add Party";

  //Party Details
  public static PARTY_DETAILS_CREATE_PARTY: string = "Create New Party";
  public static PARTY_DETAILS_HEADER: string = "Party";
  public static PARTY_DETAILS_CONTACT_NUMBER: string = "Contact #";
  public static PARTY_DETAILS_GST_NUMBER: string = "GST #";
  public static PARTY_DETAILS_ADDRESS: string = "Address";

  //Part-data

  //Chalan Error Messages
  public static CHALAN_ERR_PARTY: string = "Party";
  public static CHALAN_ERR_DRIVER: string = "Driver";
  public static CHALAN_ERR_CONTACT_NUMBER: string = "Contact Number";
  public static CHALAN_ERR_VEHICAL_NUMBER: string = "Vehical Number";
  public static CHALAN_ERR_CONTACT_NUMBER_LENGTH: string = "Contact Number should be of 10 digits";
  public static CHALAN_ERR_MATERIALS: string = "Material/Materials";

  //Party Error Messages
  public static PARTY_ERR_NAME: string = "Name";
  public static PARTY_ERR_ADDRESS: string = "Address";
  public static PARTY_ERR_CONTACT_NUMBER: string = "Contact Number";
  public static CHALAN_ERR_GST_NUMBER: string = "GST Number";

  //Employee Error Messages
  public static USER_ERR_FIRST_NAME: string = "First Name";
  public static USER_ERR_LAST_NAME: string = "Last Name";
  public static USER_ERR_MIDDLE_NAME: string = "Middle Name";
  public static USER_ERR_DOB: string = "Date Of Birth(DOB)";
  public static USER_ERR_ROLE: string = "Role";
  public static USER_ERR_AADHAR_NUMBER: string = "Aadhar Number";
  public static USER_ERR_CONTACT_NUMBER: string = "Contact Number";
  public static USER_ERR_EMERGENCY_CONTACT_NUMBER: string = "Emergency Contact Number";
  public static USER_ERR_BLOOD_GROUP: string = "GST Number";
  public static USER_AGE : string ="Age";
  public static USER_EMAIL_ID : string= "Email Id";
  public static USER_PASSWORD : string = "Password";


  //Profile Messages
  public static PROFILE_NAME: string = "Name";
  public static PROFILE_EMAIL_ID: string = "Email ID";
  public static PROFILE_CONTACT_NUMBER: string = "Contact Number";
  public static PROFILE_GST_NUMBER: string = "GST Number";
  public static PROFILE_PAN_NUMBER: string = "PAN Number";
  public static PROFILE_ADDRESS_LINE: string = "Address Line";
  public static PROFILE_LANDMARK: string = "Landmark";
  public static PROFILE_CITY: string = "City";
  public static PROFILE_STATE: string = "State";
  public static PROFILE_DISTRICT: string = "District";
  public static PROFILE_COUNTRY: string = "Country";
  public static PROFILE_PINCODE: string = "Pincode";


  public static FIRST_HEADER_MESSAGE : string="I am RJ, your personal assistant to help you with RJ Bank related queries";
  public static CLOSING_THANKS_MSG : string= 'Thank You..... Your service would be addressed soon!';
  public static MAIN_MENU : string= 'MAIN_MENU';
  public static CLOSE_CHAT_WINDOW : string= 'CLOSE';

}
