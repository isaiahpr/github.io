var options = {
  valueNames: [ 'name', 'born','subject', 'corps_region','corps_year','headshot' ],
  item: '<div class="profile"><div class="headshot"></div><div class="biography"><p><h3 class="name"></h3><h3><span class="corps_region"></span>&nbsp;<span class="corps_year"></span></h3><h3 class="name">she/her<br /></h3></p><br /><p><strong>TFA Grade Level/Subject</strong>: 1st Grade English Language Arts<br/><strong>Alma Mater: </strong>Indiana University Indianapolis<br/><strong>Major:</strong> Social Science<br/><strong>Hometown:</strong> Indianapolis, IN</p><strong>Talk to me about:</strong> Teaching early elementary, teaching the science of reading, classroom management/procedures, being a caregiver in the corps, advocating for support, what being coached as a teacher can look like</p><a class="connect-button" href="https://calendly.com/dayla-bedford/connect-with-a-current-teacher?month=2024-01" target="_blank">Chat with Dayla</a></div></div></div>'
};

var values = [{
    name: 'Jonny Strömberg',
    born: 1986,
    subject: 'english',
    corps_region: 'Hawaii',
    corps_year: 2022,
    headshot: '<img alt="Headshot of Dayla" data-entity-type="" data-entity-uuid="" src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" />',
  },
  {
    name: 'Jonas Arnklint',
    born: 1985
  },
  {
    name: 'Martina Elm',
    born: 1986
}];

var userList = new List('users', options, values);


const $sels = $('select.table-filter').change((e)=> {

  const filterArr = $sels.toArray()
                          .filter(el => !!el.value)
                          .map(el =>({prop: el.dataset.prop, value:el.value}))
  
  
  userList.filter(function(item) {    
      return !filterArr.length || filterArr.every(f =>  f.value === item.values()[f.prop]);      
  });

})