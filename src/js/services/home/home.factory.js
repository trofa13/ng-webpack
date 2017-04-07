let HomeFactory = function ($http) {
  let getContacts = () => {
    return $http.get('http://lab.ovg.me/contact_book/api/contacts_list')
      .then(data => {
        return data.data.data;
      });
  };

  let deleteContact = (id) => {
    return $http.delete('http://lab.ovg.me/contact_book/api/contacts_list')
      .then(data => {
        return data.data.data;
      });
  };

  let addContact = ({text, type}) => {
    return $http.post('http://lab.ovg.me/contact_book/api/contacts', {text: name, type: surname})
      .then(data => {
        return data.data;
      });
  };

  return { getContacts, addContact, deleteContact };
};

HomeFactory.$inject = ['$http'];
export default HomeFactory;
