import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {
    console.log("Constructor ran ...");
   }

  ngOnInit() {
    console.log("ngOnInit ran ...");
    this.name = "Jitendra Sarswat";
    this.email = "sarsjits@gmail.com";
    this.age = 26;
    this.address = {
      street: 'Lane number 5',
      city: 'Ghaziabad',
      state: 'Uttar Pradesh'
    }
    this.hobbies = ['Code','Watch Movies', 'Listen music'];
    this.hello = 'hello';

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick() {
    console.log('Hello, I was clicked.');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for(let i = 0; i < this.hobbies.length; i++) {
      if(this.hobbies[i] === hobby) {
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  body: string,
  id: number,
  userId: number,
  title: string
}