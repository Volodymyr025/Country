const country = document.querySelector('#country')
const city = document.querySelector('#city')
const street = document.querySelector('#street')
const defaultCountry = document.querySelector('#defaultCountry')
const defaultCountry2 = document.querySelector('#defaultCountry2')
const defaultCountry3 = document.querySelector('#defaultCountry3')



const countryList = {
  Austria: {
    city: ['Burgenland','Carinthia','LowerAustria','Salzburg','Vienna'],
    streets: {
        Burgenland: ['Güssinger Str','Brunnergraben','Gamischdorf','Waldhäuser','Lenzhäuser'],
        Carinthia: ['Mallnitz','Flattach','Hermagor','Villach','Althofen'],
        LowerAustria: ['Gmünd','Kleineibenstein','Hollabrunn','Krems an der Donau','Krems-Hollenburg'],
        Salzburg: ['Wilhelm-Spazier-Straß','Linzer Bundesstraße','Mönchsberg 34','Salzburg 15','Hellbrunnerstraße 60'],
        Vienna: ['Auhof','Aspern','Schönbrunn','Kagran','Favoriten']
    }
  },
  Belgium: {
    city: ['Antwerp','Anderlecht','Bruges','Brussels','Namur'],
    streets: {
        Antwerp: ['Antwerp Chinatown','El callejón Vlaeykens','Wijngaardstraat','Pedestrian tunnel','Nationalestraat'],
        Anderlecht: ['Althofen','Bad Gastein','Flattach','Friesach','Ferlach'],
        Bruges: ['Titecastraat','Velodroomstraat','Brieversweg','Doornhut','Damse Steenweg'],
        Brussels: ['Saint-Gilles','Etterbeek','Jette','Uccle','Ixelles'],
        Namur: ['Flawinne','Belgrade','Erpent','Loyers','Vedrin']
    }
  },
  CzechRepublic: {
    city: ['Praha','Brno','Olomouc','Plzen','KutnaHora'],
    streets: {
        Praha: ['st.New Town','st.Kongresová','Ukrajinská','Zvonařky','Wenzigova'],
        Brno: ['Údolní','Vachova','Zábrdovice','Veveří','Černopolní'],
        Olomouc: ['Štursova','Lazce','Wolkerova','Ostravská','Nové Sady'],
        Plzen: ['Borská','Emila Škody','Doudlevecká','Předměstí','Zahradní'],
        KutnaHora: ['Barborská','Čáslavská','Čáslavská','Šultysova','Benešova']
    }
  },
  France: {
    city: ['Paris','Nice','Marseille','Limoges','Chartres'],
    streets: {
        Paris:['Montmartre','Champ de Mars','Jehan Rictus','Panthéon','Rue Cauchy'],
        Nice:['Vernier','Cimiez','Mantega','116 Pasteur','Pessicart'],
        Marseille:['Saint-Charles','Michelet','Sainte-Marguerite','Prudhommes Les','la Major'],
        Limoges:['Denis Dussoubs','Gay Lussac','All.de Seto','Limoges','Garibaldi'],
        Chartres:['des Halles','de lÉtape au Vin','Rue Mathurin','Rue Saint-Michel','Rue Saint-Pierre']
    }
  },
  Ukraine: {
    city: ['Kyiv','Ternopil','Lviv','Chernivsi','Odesa'],
    streets: {
        Kyiv: ['Velyka Vasylkivska','Zhylianska St','Hospitalna St','Ioanna Pavla II','Mechnykova St'],
        Ternopil: ['Tarasa Shevchenka','Torhovytsia','Zamchyshche','Ivana Franka','Klinichna St'],
        Lviv: ['Shlyakhet·sʹke','Pidvalna','Svobody','Stepana Bandery','Stara St, 3'],
        Chernivsi: ['Universytetska','Kobylyanskoi','Ruska St','Ukrainska','Yakoba Fon'],
        Odesa: ['Balkivska','Buhaivka','Novoshchipnyi','Moldavanka','Derybasivska']
    }
  }
}

 



function createOption (nameParam, objParam) {
    for(let i = 0; i < nameParam.length; i++){
        let el = document.createElement('option')
        el[i] += `<option value="${[i]}">${nameParam[i]}</option>`
        objParam.innerHTML += el[i]
    }
    }
    

function changeCountryMethod (e, countr, index) {
    index = country.selectedIndex
    countr = country.options[country.selectedIndex].text
    if(+e.target.value === index){
        city.innerHTML = `<option id="defaultCountry" label="City" disabled selected></option>`
        street.innerHTML = `<option id="defaultCountry" label="Street" disabled selected></option>`
        defaultCountry2.selected = true
        defaultCountry3.selected = true
        city.disabled = false
        street.disabled = true
        createOption (countryList[countr].city, city)
        return
    }
}

function changeCityMethod (e, cit, countr, index) {
    index = city.selectedIndex
    cit = city.options[city.selectedIndex].text
    countr = country.options[country.selectedIndex].text
    if(+e.target.value === index - 1){
        street.innerHTML = `<option id="defaultCountry" label="Street" disabled selected></option>`
        defaultCountry3.selected = true
        street.disabled = false
        createOption (countryList[countr].streets[cit], street)
        return
    }
}



country.addEventListener('change',changeCountryMethod)
city.addEventListener('change',changeCityMethod)





