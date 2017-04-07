class HomeController {
  constructor (HomeFactory) {
    this.contacts = [];
    this.HomeFactory = HomeFactory;
    HomeFactory.getContacts()
      .then(contacts => {
        this.contacts = contacts;
      });
  }

  deleteContact(id){

  }

  addContact() {
    const data = {
      name: this.name,
      surname: this.surname
    };

    this.HomeFactory.addContact(data)
  }
}

export default HomeController;
