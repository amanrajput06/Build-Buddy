var Lslide = document.querySelectorAll('.Lslide'),
                Rslide = document.querySelectorAll('.Rslide'),
                control = document.querySelectorAll('.oncontrol'),
                slideHeight = document.querySelector('.wrapper').clientHeight,
                color = ['#06070b', '#000000', '#000000'],
                index = 0;

            function init() {
                slideHeight = document.querySelector('.wrapper').clientHeight;
                for (i = 0; i < Lslide.length; i++) {
                    Lslide[i].style.backgroundColor = color[i];
                    Lslide[i].style.top = -slideHeight * i + "px";
                    Rslide[i].style.top = slideHeight * i + "px";
                }  
            }

            init();
            window.addEventListener('resize', function(){
                init();
            });

            function moveToTop() {
                index++;
                for (el = 0; el < Lslide.length; el++) {
                    Lslide[el].style.top = parseInt(Lslide[el].style.top) + slideHeight + "px";
                    Rslide[el].style.top = parseInt(Rslide[el].style.top) - slideHeight + "px";
                }

                if (index > Lslide.length-1) {
                    index = 0;
                    for (el = 0; el < Lslide.length; el++) {
                        Lslide[el].style.top = -slideHeight * el + "px";
                        Rslide[el].style.top = slideHeight * el + "px";
                    }
                }
            }

            function moveToBottom() {
                index--;
                for (el = 0; el < Lslide.length; el++) {
                    Lslide[el].style.top = parseInt(Lslide[el].style.top) - slideHeight + "px";
                    Rslide[el].style.top = parseInt(Rslide[el].style.top) + slideHeight + "px";
                }
                if (index < 0) {
                    index = Rslide.length-1;
                    for (el = 0; el < Lslide.length; el++) {
                        Lslide[el].style.top = parseInt(Lslide[el].style.top) + slideHeight * Lslide.length + "px";
                        Rslide[el].style.top = parseInt(Rslide[el].style.top) - slideHeight * Rslide.length + "px";
                    }
                }
            }

            function transition() {
                for (t = 0; t < Lslide.length; t++) {
                    Lslide[t].style.transition = "all 0.8s";
                    Rslide[t].style.transition = "all 0.8s";
                }
            }

            for (t = 0; t < control.length; t++) {
                control[t].addEventListener("click", function() {
                    if (this.classList.contains('control-top')) {
                        moveToTop();
                    } 
                    if (this.classList.contains('control-bottom')) {
                        moveToBottom();
                    }
                    transition();
                });
            }

            // Automatic sliding functionality
            var autoSlideInterval = setInterval(function() {
                moveToTop();
                transition();
            }, 5000); // Change slide every 5 seconds