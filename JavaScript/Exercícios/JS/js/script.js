var start = new Date().getTime();

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;

            }
        function shapeAppear() {

            var top = Math.random() *400;
            var left = Math.random() *400;
            var width = Math.random() *400;
            var borderRadius = Math.random() *400;

            document.getElementById("shape").style.backgroundColor = getRandomColor();
            document.getElementById("shape").style.top = top + "px";
            document.getElementById("shape").style.left = left + "px";
            document.getElementById("shape").style.width = width + "px";
            document.getElementById("shape").style.height = width + "px";
            document.getElementById("shape").style.borderRadius = borderRadius + "px";
            document.getElementById("shape").style.display = "block";
            start = new Date().getTime();

        
    }

        function afterDelay () {
            setTimeout((shapeAppear), Math.random()*2000);

        }


        afterDelay ();
            document.getElementById("shape").onclick = function() {
                document.getElementById("shape").style.display = "none";

                var end = new Date().getTime();
                var timeTaken = (end - start) / 1000;       
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
        
        
        
                afterDelay ();
        }
        