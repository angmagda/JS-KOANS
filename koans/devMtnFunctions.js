describe('First Functions', function(){
  it('should create a function returns the current year', function(){
    //Write a function called getYear that returns the current year
    function getYear(year) {
      var year = new Date();
      var getYear = year.getFullYear();
      return(getYear);
    }
    expect(getYear()).toBe(2014);
  });
  it('should create a function returns the current year and saves it', function(){
    //Write a function that returns the current year. Then call that function and save the returned value
    //to a variable called currentYearVar
    function getYear(year) {
      var year = new Date();
      var getYear = year.getFullYear();
      return(getYear);
    }

    getYear();
    var currentYearVar = getYear();

    expect(currentYearVar).toBe(2014);
  });
  it('should create a multiply function', function(){
    //Write a function called multiply that takes in two parametrs, multiplies them together, and returns the answer
    function multiply(par1, par2) {

      var answer = par1 * par2;
      return(answer);
    }
    expect(multiply(2,4)).toBe(8);
  });
})

