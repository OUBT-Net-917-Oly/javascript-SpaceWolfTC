<!DOCTYPE html>
    <html lang="en">
        <head>
            <title>javascript</title>

            <script type="text/javascript">

                //get the first number from the html form
                function getNumber1(){
			var number1 = document.getElementById("number1").value;
			//we have to use parseInt otherwise it would treat the number as text
			return parseInt(number1);
		};

		//get the second number from the html form
		function getNumber2(){
			var number2 = document.getElementById("number2").value;
			//we have to use parseInt otherwise it would treat the number as text
			return parseInt(number2);
		};

		//output the result to the page
		function displayResult(result){
                    document.getElementById("result").value = result;
                };

		//add number 1 and number 2 and display result
        function add() {

			//get the first number
			var number1 = getNumber1();
			//get the second number
			var number2 = getNumber2();

			//add number 1 and 2
            var result = number1 + number2;

			//display the answer
			displayResult(result);

            return;
        };

		//implement the subtract function code
		function subtract() {
                    alert("not implemented yet");
                };

		//create the multiplication function

		//create the division function

    </script>

        </head>
        <body>
            <label>Number 1: </label>
            <input type="text" id="number1" />
            <br />

            <label>Number 2: </label>
            <input type="text" id="number2" />
            <br />

            <!-- add should work already, follow the pattern for others -->
    <input type="button" value="+" onclick="add();" />
            <!-- Fill this section in -->
    <input type="button" value="-" onclick="subtract();" />
            <input type="button" value="x" onclick="" />
            <input type="button" value="/" onclick="" />

            <br />

            <label>Result: </label>
            <input type="text" id="result" />

        </body>
    </html>