var express = require("express");
var router = express.Router()

router.get("/", function(req, res, next) {
    res.send([
		{   id=1,
			name:'India',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/India.jpg',
		},
		{id=2,
			name:'Albania',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Albania.jpg',
		},
		{id=3,
			name:'Algeria',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Algeria.jpg',	
		},
		{id=4,
			name:'Andorra',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Andorra.jpg',	
		},
        {id=5,
			name:'Angola',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Angola.jpg'	,
		},
        {id=6,
			name:'Argentina',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Argentina.jpg',	
		},
        {id=7,
			name:'Armenia',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Armenia.jpg',	
		},
        {id=8,
			name:'Australia',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Australia.jpg',	
		},
        {id=9,
			name:'Austria',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Austria.jpg',	
		},
        {id=10,
			name:'Azerbaijan',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Azerbaijan.jpg',	
		},
        {id=11,
			name:'Bermuda',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Bermuda.jpg',	
		},
        {id=12,
			name:"Bhutan",
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Bhutan.jpg',	
		},
        {id=13,
			name:'Bolivia',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Bolivia.jpg',	
		},
        {id=14,
			name:'Brazil',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg',	
		},
        {id=15,
			name:'Cayman Iskands',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Cayman_Islands.jpg',	
		},
        {id=16,
			name:'China',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/China.jpg',	
		},
        {id=17,
			name:'Colombia',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Colombia.jpg',	
		},
        {id=18,
			name:'England',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/England.jpg',	
		},
        {id=19,
			name:'Afghanistan',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Afghanistan.jpg',	
		},
        {id=20,
			name:'Greece',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Greece.jpg',	
		},
        {id=21,
			name:'Greenland',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Greenland.jpg',	
		},
        {id=22,
			name:'Iceland',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Iceland.jpg',	
		},
        {id=23,
			name:'Iran',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Iran.jpg',	
		},
        {id=24,
			name:'Italy',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Italy.jpg',	
		},
        {id=25,
			name:'Japan',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Japan.jpg',	
		},
        {id=26,
			name:'jordan',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Jordan.jpg',	
		},
        {id=27,
			name:'Kenya',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/Kenya.jpg',	
		},
        {id=28,
			name:'New Zealand',
			img:'https://www.sciencekids.co.nz/images/pictures/flags96/New_Zealand.jpg',	
		},


	]);
    
});

module.exports = router;
