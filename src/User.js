class User {
  // User code here
  #password;
  constructor(username, password, age, loggedIn){
    this.username = username;
    this.#password = password;
    this.age = age;
    this.loggedIn = false;
  }
  getOriginalPassword(){
    return this.#password;
  }
  getPassword(){
    const censoredPassword = this.#password;
    return '*'.repeat(censoredPassword.length);
  }
  logIn(password){
    let originalPassword = this.getOriginalPassword();
    if(password === originalPassword){
      this.loggedIn = true;
      return `${this.username} is now logged in`
    }else {
      throw new Error('Incorrect password')
    }
  }
  logOut(){
    if(this.loggedIn === false){
      return `${this.username} is already logged out`
    }else if(this.loggedIn === true){
      this.loggedIn = false;
      return `${this.username} is now logged out`;
    }
  }
}

module.exports = User
