var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('YELP',['yelp']);

var count = "";

describe('valueSortStateCityCategoriesLowToHigh',function(){

	before(function (done){
  db.yelp.aggregate([
                    {$match:{$and:[{state:"NC"},{city:"Charlotte"},{categories:/.*food.*/i}]}},
                    {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1,review_count:1}},{$sort:{stars:1}}
                    ],
	                function (err,res){
            				count=res[0].city;
            				done();
			 });
		});

	it('by state city categories value low to high',function(){
		const result = count;
		expect(result).to.equal("Charlotte");
	});
});
