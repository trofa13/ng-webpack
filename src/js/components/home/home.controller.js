class HomeController {
  constructor (HomeFactory) {
    this.contacts = [];
    HomeFactory.getContacts()
      .then(contacts => {
        this.contacts = contacts;
      });
  }
}

export default HomeController;
