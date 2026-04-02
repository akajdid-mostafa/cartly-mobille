"use strict";
document.addEventListener("DOMContentLoaded", function () {
    $(function ($) {
        // <========= Preloader Starts ============>
        $(window).on('load', function () {
            setTimeout(function () {
                $('#preloader').fadeOut('slow', function () {
                    $(this).remove();
                });
            }, 1500);
        });
        // <========= Preloader Ends ============>
        // <========= PopUp video starts ============>
        $(function () {
            $('.playbtn').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        });
        // <========= PopUp video ends ============>
        // <========= Aos Animation ============>
        $(document).ready(function () {
            $('.zoomin').attr({
                "data-aos": "zoom-in",
                "data-aos-duration": "1500"
            });
            AOS.init({
                once: true,
            });
        });
        // <========= Aos Animation ============>
        // <========= Hero Starts ============>
        let heroCarousel = document.querySelector('.hero_slider');
        // let heroBtn = document.querySelector('.hero_slider_btn');
        if (heroCarousel) {
            const swiper = new Swiper(heroCarousel, {
                loop: true,
                speed: 600,
                // effect: "fade", // Add this line for fade effect
                fadeEffect: { crossFade: true },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                spaceBetween: 16,
                slidesPerView: 1,
                paginationClickable: true,
                // navigation: {
                //     nextEl: heroBtn.querySelector('.ara-next'),
                //     prevEl: heroBtn.querySelector('.ara-prev'),
                // },
                pagination: {
                    el: ".swiper-pagination",
                },

            });
        }
        // Hero Slider Starts
        // Sales Products Slider Starts
        document.querySelectorAll('.salesproduct_slider').forEach(function (carousel) {
            new Swiper(carousel, {
                loop: true,
                speed: 600,
                fadeEffect: { crossFade: true },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                spaceBetween: 12,
                slidesPerView: 2.3,
                paginationClickable: true,
            });
        });
        // Sales Products Slider Ends
        // Mega Live Sales Slider Starts
        document.querySelectorAll('.megalivesales_slider').forEach(function (carousel) {
            new Swiper(carousel, {
                loop: true,
                speed: 600,
                fadeEffect: { crossFade: true },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                spaceBetween: 12,
                slidesPerView: 1.1,
                paginationClickable: true,

            });
        });
        // Mega Live Sales Slider Ends
        // Mega Live Sales Slider Starts
        let recentWatchedCarousel = document.querySelector('.recentwatchedlive_slider');
        if (recentWatchedCarousel) {
            const swiper = new Swiper(recentWatchedCarousel, {
                loop: true,
                speed: 600,
                fadeEffect: { crossFade: true },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                spaceBetween: 12,
                slidesPerView: 2.2,
                paginationClickable: true,

            });
        }
        // Mega Live Sales Slider Ends
        // <========= categorycards slider Starts ============>
        let categorycardCarousel = document.querySelector('.categorycards');
        if (categorycardCarousel) {
            const swiper = new Swiper(categorycardCarousel, {
                loop: true,
                speed: 1200,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,

                },
                spaceBetween: 12,
                slidesPerView: 4,
                paginationClickable: true,
            });
        }
        // categorycards slider Starts

        // <========= Gallery Slider Starts ============>
        var swiper = new Swiper(".gallerymyswiper", {
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".gallerymyswiper2", {
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
            },
            // navigation: {
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            // },
            thumbs: {
                swiper: swiper,
            },
        });
        // <========= Gallery Slider Ends ============>
        // <========= Gallery Slider Starts ============>
        var swiper3 = new Swiper(".gallerymyswiper3", {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 1.1,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
            },
            // navigation: {
            //     nextEl: ".swiper-button-next",
            //     prevEl: ".swiper-button-prev",
            // },
        });
        // <========= Gallery Slider Ends ============>
        // <========= Gallery Slider 7 Starts ============>
        var swiper7 = new Swiper(".gallerymyswiper7", {
            loop: true,
            speed: 1200,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            spaceBetween: 10,
            slidesPerView: 1,
            // freeMode: true,
            watchSlidesProgress: true,
            pagination: {
                el: ".swiper-pagination",
            },
        });
        // <========= Gallery Slider 7 Ends ============>

        // <========= Gallery Slider 8 Starts ============>
        var swiper8 = new Swiper(".gallerymyswiper8", {
            loop: true,
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            slidesPerView: 1,
            watchSlidesProgress: true,
        });
        // <========= Gallery Slider 8 Ends ============>
        // <========= Testimonial two Starts ============>
        let testimonialCarousel = document.querySelector('.testimonial_two');
        let testimonialBtn = document.querySelector('.testimonial_two_btn');
        if (testimonialCarousel) {
            const swiper = new Swiper(testimonialCarousel, {
                loop: false,
                speed: 1200,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,

                },
                spaceBetween: 0,
                slidesPerView: 1,
                paginationClickable: true,
                navigation: {
                    nextEl: testimonialBtn.querySelector('.ara-next'),
                    prevEl: testimonialBtn.querySelector('.ara-prev'),
                },
                pagination: {
                    el: ".swiper-pagination",
                },
            });
        }


        let bradCarouselShow = document.querySelector('.brad-carousel-show');
        if (bradCarouselShow) {
            const swiper = new Swiper(bradCarouselShow, {
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                spaceBetween: 24,
                slidesPerView: 1,
                breakpoints: {
                    1599: {
                        slidesPerView: 1,
                    },
                    1400: {
                        slidesPerView: 1,
                    },
                    1200: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    578: {
                        slidesPerView: 1,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                }
            });
        }
        // Testimonial Ends

        // <========= Testimonial Starts ============>
        let categoriesCarousel = document.querySelector('.testimonial_slider');
        let categoriesBtn = document.querySelector('.testimonial_slider_btn');
        if (categoriesCarousel) {
            const swiper = new Swiper(categoriesCarousel, {
                loop: true,
                // autoplay: {
                //     delay: 5000,
                //     disableOnInteraction: false,
                // },
                spaceBetween: 0,
                slidesPerView: 1,
                paginationClickable: true,
                navigation: {
                    nextEl: categoriesBtn.querySelector('.ara-next'),
                    prevEl: categoriesBtn.querySelector('.ara-prev'),
                },
            });
        }
        // <========= Testimonial Ends ============>

        // <========= Odometer Init  ============>
        let windowHeight = $(window).height();
        $('.odometer').children().each(function () {
            if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
                var section = $(this).closest(".counters");
                section.find(".odometer").each(function () {
                    $(this).html($(this).attr("data-odometer-final"));
                });
            }
        });

        $(document).ready(function () {
            $(".odometer").each(function () {
                var $odometerElement = $(this);
                var elementValue = Number($odometerElement.attr("data-counter-value"));

                var od = new Odometer({
                    el: $odometerElement[0],
                    value: 0,
                    format: "",
                    theme: "digital"
                });

                var observer = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            od.update(elementValue);
                            observer.unobserve(entry.target);
                        }
                    });
                });

                observer.observe($odometerElement.parent()[0]);
            });
        });
        // <========= Tab Starts ============>
        $(".tablinks .nav-links").each(function () {
            var targetTab = $(this).closest(".singletab");
            targetTab.find(".tablinks .nav-links").each(function () {
                var navBtn = targetTab.find(".tablinks .nav-links");
                navBtn.click(function () {
                    navBtn.removeClass('active');
                    $(this).addClass('active');
                    var indexNum = $(this).closest("li").index();
                    var tabcontent = targetTab.find(".tabcontents .tabitem");
                    $(tabcontent).removeClass('active');
                    $(tabcontent).eq(indexNum).addClass('active');
                });
            });
        });
        // <========= Tab Ends ============>
        // <========= custom Accordion ============>
        $('.accordion-single .header-area').on('click', function () {
            if ($(this).closest(".accordion-single").hasClass("active")) {
                $(this).closest(".accordion-single").removeClass("active");
                $(this).next(".content-area").slideUp();
            } else {
                $(".accordion-single").removeClass("active");
                $(this).closest(".accordion-single").addClass("active");
                $(".content-area").not($(this).next(".content-area")).slideUp();
                $(this).next(".content-area").slideToggle();
            }
        });
        // <========= Nice Select Starts ============>
        // $('select').niceSelect();
        // <========= Nice Select Ends ============>
        // <========= Filter Starts ============>
        // Size Showing
        $(".sizebtns").click(function () {
            $(".sizecards").toggleClass("show");
        });
        $(".colorbtns").click(function () {
            $(".colorcards").toggleClass("show");
        });
        $(".brandbtns").click(function () {
            $(".brandcards").toggleClass("show");
        });
        $(".stockbtns").click(function () {
            $(".stockcards").toggleClass("show");
        });
        $(".ratingbtns").click(function () {
            $(".ratingcards").toggleClass("show");
        });
        $(".pricerangebtns").click(function () {
            $(".pricerangecards").toggleClass("show");
        });
        // <========= Filter Ends ============>

        // Price Range Starts
        (function ($) {

            "use strict";

            var DEBUG = false, // make true to enable debug output
                PLUGIN_IDENTIFIER = "RangeSlider";

            var RangeSlider = function (element, options) {
                this.element = element;
                this.options = options || {};
                this.defaults = {
                    output: {
                        prefix: '', // function or string
                        suffix: '', // function or string
                        format: function (output) {
                            return output;
                        }
                    },
                    change: function (event, obj) { }
                };
                // This next line takes advantage of HTML5 data attributes
                // to support customization of the plugin on a per-element
                // basis.
                this.metadata = $(this.element).data('options');
            };

            RangeSlider.prototype = {

                ////////////////////////////////////////////////////
                // Initializers
                ////////////////////////////////////////////////////

                init: function () {
                    if (DEBUG && console) console.log('RangeSlider init');
                    this.config = $.extend(true, {}, this.defaults, this.options, this.metadata);

                    var self = this;
                    // Add the markup for the slider track
                    this.trackFull = $('<div class="track track--full"></div>').appendTo(self.element);
                    this.trackIncluded = $('<div class="track track--included"></div>').appendTo(self.element);
                    this.inputs = [];

                    $('input[type="range"]', this.element).each(function (index, value) {
                        var rangeInput = this;
                        // Add the ouput markup to the page.
                        rangeInput.output = $('<output>').appendTo(self.element);
                        // Get the current z-index of the output for later use
                        rangeInput.output.zindex = parseInt($(rangeInput.output).css('z-index')) || 1;
                        // Add the thumb markup to the page.
                        rangeInput.thumb = $('<div class="slider-thumb">').prependTo(self.element);
                        // Store the initial val, incase we need to reset.
                        rangeInput.initialValue = $(this).val();
                        // Method to update the slider output text/position
                        rangeInput.update = function () {
                            if (DEBUG && console) console.log('RangeSlider rangeInput.update');
                            var range = $(this).attr('max') - $(this).attr('min'),
                                offset = $(this).val() - $(this).attr('min'),
                                pos = offset / range * 100 + '%',
                                transPos = offset / range * -100 + '%',
                                prefix = typeof self.config.output.prefix == 'function' ? self.config.output.prefix.call(self, rangeInput) : self.config.output.prefix,
                                format = self.config.output.format($(rangeInput).val()),
                                suffix = typeof self.config.output.suffix == 'function' ? self.config.output.suffix.call(self, rangeInput) : self.config.output.suffix;

                            // Update the HTML
                            $(rangeInput.output).html(prefix + '' + format + '' + suffix);
                            $(rangeInput.output).css('left', pos);
                            $(rangeInput.output).css('transform', 'translate(' + transPos + ',0)');

                            // Update the IE hack thumbs
                            $(rangeInput.thumb).css('left', pos);
                            $(rangeInput.thumb).css('transform', 'translate(' + transPos + ',0)');

                            // Adjust the track for the inputs
                            self.adjustTrack();
                        };

                        // Send the current ouput to the front for better stacking
                        rangeInput.sendOutputToFront = function () {
                            $(this.output).css('z-index', rangeInput.output.zindex + 1);
                        };

                        // Send the current ouput to the back behind the other
                        rangeInput.sendOutputToBack = function () {
                            $(this.output).css('z-index', rangeInput.output.zindex);
                        };

                        ///////////////////////////////////////////////////
                        // IE hack because pointer-events:none doesn't pass the 
                        // event to the slider thumb, so we have to make our own.
                        ///////////////////////////////////////////////////
                        $(rangeInput.thumb).on('mousedown', function (event) {
                            // Send all output to the back
                            self.sendAllOutputToBack();
                            // Send this output to the front
                            rangeInput.sendOutputToFront();
                            // Turn mouse tracking on
                            $(this).data('tracking', true);
                            $(document).one('mouseup', function () {
                                // Turn mouse tracking off
                                $(rangeInput.thumb).data('tracking', false);
                                // Trigger the change event
                                self.change(event);
                            });
                        });

                        // IE hack - track the mouse move within the input range
                        $('body').on('mousemove', function (event) {
                            // If we're tracking the mouse move
                            if ($(rangeInput.thumb).data('tracking')) {
                                var rangeOffset = $(rangeInput).offset(),
                                    relX = event.pageX - rangeOffset.left,
                                    rangeWidth = $(rangeInput).width();
                                // If the mouse move is within the input area
                                // update the slider with the correct value
                                if (relX <= rangeWidth) {
                                    var val = relX / rangeWidth;
                                    $(rangeInput).val(val * $(rangeInput).attr('max'));
                                    rangeInput.update();
                                }
                            }
                        });

                        // Update the output text on slider change
                        $(this).on('mousedown input change touchstart', function (event) {
                            if (DEBUG && console) console.log('RangeSlider rangeInput, mousedown input touchstart');
                            // Send all output to the back
                            self.sendAllOutputToBack();
                            // Send this output to the front
                            rangeInput.sendOutputToFront();
                            // Update the output
                            rangeInput.update();
                        });

                        // Fire the onchange event 
                        $(this).on('mouseup touchend', function (event) {
                            if (DEBUG && console) console.log('RangeSlider rangeInput, change');
                            self.change(event);
                        });

                        // Add this input to the inputs array for use later
                        self.inputs.push(this);
                    });

                    // Reset to set to initial values
                    this.reset();

                    // Return the instance
                    return this;
                },

                sendAllOutputToBack: function () {
                    $.map(this.inputs, function (input, index) {
                        input.sendOutputToBack();
                    });
                },

                change: function (event) {
                    if (DEBUG && console) console.log('RangeSlider change', event);
                    // Get the values of each input
                    var values = $.map(this.inputs, function (input, index) {
                        return {
                            value: parseInt($(input).val()),
                            min: parseInt($(input).attr('min')),
                            max: parseInt($(input).attr('max'))
                        };
                    });

                    // Sort the array by value, if we have 2 or more sliders
                    values.sort(function (a, b) {
                        return a.value - b.value;
                    });

                    // call the on change function in the context of the rangeslider and pass the values
                    this.config.change.call(this, event, values);
                },

                reset: function () {
                    if (DEBUG && console) console.log('RangeSlider reset');
                    $.map(this.inputs, function (input, index) {
                        $(input).val(input.initialValue);
                        input.update();
                    });
                },

                adjustTrack: function () {
                    if (DEBUG && console) console.log('RangeSlider adjustTrack');
                    var valueMin = Infinity,
                        rangeMin = Infinity,
                        valueMax = 0,
                        rangeMax = 0;

                    // Loop through all input to get min and max
                    $.map(this.inputs, function (input, index) {
                        var val = parseInt($(input).val()),
                            min = parseInt($(input).attr('min')),
                            max = parseInt($(input).attr('max'));

                        // Get the min and max values of the inputs
                        valueMin = (val < valueMin) ? val : valueMin;
                        valueMax = (val > valueMax) ? val : valueMax;
                        // Get the min and max possible values
                        rangeMin = (min < rangeMin) ? min : rangeMin;
                        rangeMax = (max > rangeMax) ? max : rangeMax;
                    });

                    // Get the difference if there are 2 range input, use max for one input.
                    // Sets left to 0 for one input and adjust for 2 inputs
                    if (this.inputs.length > 1) {
                        this.trackIncluded.css('width', (valueMax - valueMin) / (rangeMax - rangeMin) * 100 + '%');
                        this.trackIncluded.css('left', (valueMin - rangeMin) / (rangeMax - rangeMin) * 100 + '%');
                    } else {
                        this.trackIncluded.css('width', valueMax / (rangeMax - rangeMin) * 100 + '%');
                        this.trackIncluded.css('left', '0%');
                    }
                }
            };

            RangeSlider.defaults = RangeSlider.prototype.defaults;

            $.fn.RangeSlider = function (options) {
                if (DEBUG && console) console.log('$.fn.RangeSlider', options);
                return this.each(function () {
                    var instance = $(this).data(PLUGIN_IDENTIFIER);
                    if (!instance) {
                        instance = new RangeSlider(this, options).init();
                        $(this).data(PLUGIN_IDENTIFIER, instance);
                    }
                });
            };

        }
        )(jQuery);


        var rangeSlider = $('#facet-price-range-slider');
        if (rangeSlider.length > 0) {
            rangeSlider.RangeSlider({
                output: {
                    format: function (output) {
                        return output.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                    },
                    suffix: function (input) {
                        return parseInt($(input).val()) == parseInt($(input).attr('max')) ? this.config.maxSymbol : '';
                    }
                }
            });
        }

        // Price Range Ends

    });
});
