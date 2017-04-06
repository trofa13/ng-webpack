let HomeFactory = function ($http) {
  let getContacts = () => {
    return $http.get('http://lab.ovg.me/contact_book/api/contacts_list')
      .then(data => {
        return data.data.data;
      });
  };

  return { getContacts };
};

HomeFactory.$inject = ['$http'];
export default HomeFactory;
