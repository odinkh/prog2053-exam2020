import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object },
      myBool: {type: Boolean}
    };
  }
constructor() {
  super();
  this.checkbool();
  
}

 checkbool(){       //Forsøkte å få boolen til å fungere men ble nødt til å levere uten å fått implementert dette
  console.log(this.user);
  if(this.user){
    this.myBool=true;
  }
}

    render(){
      return html`
      <h1>Rediger bruker: ${this.user.uname}<h1>
      
      
        <h1>Fyll inn dataene du vill forandre<h1>
        
        <form onsubmit="javascript: return false;">
          <div>
            <label for="uname">New Username</label>
            <input type="username" id="uname" name="uname">
          </div>
        
          <div>
             <label for="firstName">First Name</label>
             <input type="name" id="firstName" name="firstName">
           </div>
        
           <div>
                    <label for="lastName">Lastname</label>
                    <input type="lastname" id="lastName" name="lastName">
            </div>
                <t1>For å forandre passord må du skrive inn gammelt passord</t1>
            <div>
                    <label for="oldpwd">Old Password</label>
                    <input type="password" id="oldpwd" name="oldpwd">
            </div>
            <div>
                    <label for="pwd">New password</label>
                    <input type="password" id="pwd" name="pwd">
            </div>
            <button type="submit" class="btn" id="change" @click=${this.changeUser}>Change </button> 
          </form>

        
      
      `;
      }
  // din kode her




  
changeUser(e) {
  var formData = new FormData(e.target.form);     //Sender data som en form med fetch funksjonen 
  var object={};
  formData.forEach((value, key) => object[key] = value);
  const data = JSON.stringify(object);

fetch('api/updateUser.php',{
method: 'POST',
credentials: "include",
headers: {
  'Content-Type': 'application/json'
},
body: data

}).then(res => res.json()
).then(data => {

  window.alert(data)
});
  }


}
customElements.define('edit-user', EditUser);
