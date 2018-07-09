var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('YELP',['yelp']);

var count = "";

describe('valueSortKeywordLowToHigh',function(){

	before(function (done){
  db.yelp.aggregate([
                    {$match:{$or:[{name:/.*Salon.*/i},{categories:/.*hair.*/i}]}},
                    {$project:{name:1,address:1,city:1,state:1,stars:1,is_open:1,review_count:1}},{$sort:{stars:1}}],
                    function (err,res){
            				count=res[0].state;
            				done();
			 });
		});

	it('by keyword value low to high',function(){
		const result = count;
		expect(result).to.equal("AZ");
	});
});
