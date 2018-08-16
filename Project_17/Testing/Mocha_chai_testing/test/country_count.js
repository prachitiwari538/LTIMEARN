var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('pro',['rest']);

var count = 0;
describe('TestMongoDB',function(){

	before(function (done){
   		db.rest.aggregate([{$match:{
					country:"US-zone-1"
				   }}
		       		   ],function(err,res){
                                          console.log(res.length); 
				          count=res.length;
                                             done();
                                                     }
						

                                );




		});

	it('by city count',function(){
		const result = count;
		expect(result).to.equal(7932);
	});
});