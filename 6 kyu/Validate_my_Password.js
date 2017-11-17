validPass=password=> password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,19}$/g)? 'VALID':'INVALID'
