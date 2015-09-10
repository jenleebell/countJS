describe('countUpBy', function () {
  it('will display the given number', function(){
    expect(countUpBy(5,5)).to.eql([5])
  })

  it('will work', function() {
    expect(countUpBy(100,5)).to.eql([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100])
  })
});
