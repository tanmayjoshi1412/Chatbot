import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AngularNotificationService, NotifComponent} from "angular-notification-alert";

@Component({
  selector: 'notifications-alert',
  templateUrl: './notifications-alert.component.html',
  styleUrls: ['./notifications-alert.component.css']
})
export class NotificationsAlertComponent implements OnInit {

  ngOnInit(): void {
  }

  @ViewChild('parent', {read: ViewContainerRef}) target: ViewContainerRef;

  private componentRef: ComponentRef<any>;
  // inject the service in your constructor class
  constructor(private Service: AngularNotificationService,
              private componentFactoryResolver: ComponentFactoryResolver) { }


  // or show the notif element when an event fires
  errorNotification(prop1: any) {
    let setting = {
      width: '300px',
      type: 'danger',
      title: prop1.title,
      body: prop1.message,
      position: 'top right',
      duration: 5000,
      background: '#fff'
    };
    this.Service.setProperties(setting);
    const childComponent = this.componentFactoryResolver.resolveComponentFactory( NotifComponent );
    this.componentRef = this.target.createComponent(childComponent);
  }

  successeNotification(prop1: any) {
    let setting = {
      width: '300px',
      type: 'success',
      title: prop1.title,
      body: prop1.message,
      position:  'top right',
      duration: 5000,
      background: '#fff'
    };
    this.Service.setProperties(setting);
    const childComponent = this.componentFactoryResolver.resolveComponentFactory( NotifComponent );
    this.componentRef = this.target.createComponent(childComponent);
  }

}
