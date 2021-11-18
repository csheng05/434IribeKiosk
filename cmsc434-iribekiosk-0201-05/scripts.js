window.onload = function() {
    var canvas = document.getElementById("mapCanvas");
    canvas.width = 1771;
    canvas.height = 1134;
    var ctx = canvas.getContext("2d");

    // init map floor images
    var mapImgs = [new Image(), new Image(), new Image()];
    mapImgs[0].src = 'floor0.png';
    mapImgs[1].src = 'floor1.png';
    mapImgs[2].src = 'floorN.png';

    // legend images
    var restroomImg = new Image(30, 30);
    var stairsImg = new Image(30, 30);
    var elevatorImg = new Image(30, 30);
    var cafeImg = new Image(30, 30);
    var hereImg = new Image(30, 30);
    restroomImg.src = 'icons/restroom.png';
    stairsImg.src = 'icons/stairs.png';
    elevatorImg.src = 'icons/elevator.png';
    cafeImg.src = 'icons/food.png';
    hereImg.src = 'icons/here.png';

    let iconLocs = [
        // ground floor
        {
            "restroom": {
                "img": restroomImg,
                "locs": [[550, 630]]
            },
            "stairs": {
                "img": stairsImg,
                "locs": [[350, 620], [1080, 750], [1050, 1035]]
            },
            "elevator": {
                "img": elevatorImg,
                "locs": [[880, 875]]
            },
            "cafe": {
                "img": cafeImg,
                "locs": [[570, 780]]
            },
            "here": {
                "img": hereImg,
                "locs": [[880, 620]]
            }
        },
        // first floor
        {
            "restroom": {
                "img": restroomImg,
                "locs": [[1170, 890]]
            },
            "stairs": {
                "img": stairsImg,
                "locs": [[350, 620], [1080, 750], [1050, 1035]]
            },
            "elevator": {
                "img": elevatorImg,
                "locs": [[880, 875]]
            }
        },
        // upper floor
        {
            "restroom": {
                "img": restroomImg,
                "locs": [[1170, 890]]
            },
            "stairs": {
                "img": stairsImg,
                "locs": [[350, 620], [1080, 750], [1050, 1035]]
            },
            "elevator": {
                "img": elevatorImg,
                "locs": [[880, 875]]
            }
        },
    ]

    let canvHeight = 1134;
    let canvWidth = 1771;
    let canvasBox = document.getElementById("mapBox");
    canvas.width = canvWidth;
    canvas.height = canvHeight;
    let verticalAdj = 0;
    let horizontalAdj = canvasBox.clientWidth - canvas.clientWidth;
    let cameraOffset = { x: canvas.width/2, y: canvas.height/2 + verticalAdj }
    let cameraZoom = .75
    let MAX_ZOOM = 5
    let MIN_ZOOM = .75
    let SCROLL_SENSITIVITY = 0.0005
    let currFloor = 0;
    let currentIcon = null;

    // override navigation
    const params = new URLSearchParams(window.location.search);
    const nav = params.get('navigation');
    const validRooms = ['IRB0324', 'IRB1116', 'helpdesk'];
    if(nav) {
        // show nav close button
        if(validRooms.includes(nav)) document.getElementById('closeNav').style.display = 'block';
        if(nav == 'IRB0324') {
            mapImgs[0].src = 'floor0_IRB0324.png';
        } else if(nav == 'IRB1116') {
            // set image and floor
            mapImgs[0].src = 'floor0_up.png';
            mapImgs[1].src = 'floor1_IRB1116.png';
            currFloor = 1;
            let floorButtons = document.getElementsByClassName('floorSelect');
            floorButtons[0].classList.remove('activeFloor');
            floorButtons[1].classList.add('activeFloor');
        } else if(nav == 'helpdesk') {
            mapImgs[0].src = 'floor0_up.png';
            mapImgs[1].src = 'floor1_helpdesk.png';
            currFloor = 1;
            let floorButtons = document.getElementsByClassName('floorSelect');
            floorButtons[0].classList.remove('activeFloor');
            floorButtons[1].classList.add('activeFloor');
        } else {
            var mapModal = new bootstrap.Modal(document.getElementById('mapModal'));
            document.getElementById('mapModalRoom').innerHTML = nav;
            mapModal.show();
        }
    }

    function draw()
    {
        ctx.canvas.width = canvWidth;
        ctx.canvas.height = canvHeight;
        let mapImg = mapImgs[currFloor];
        
        // Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
        ctx.translate( canvas.width / 2 + horizontalAdj, canvas.height / 2 + verticalAdj )
        ctx.scale(cameraZoom, cameraZoom)
        ctx.translate( -canvas.width / 2 + cameraOffset.x, -canvas.height / 2 + cameraOffset.y )
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // draw our elements
        ctx.drawImage(mapImg, -canvas.width/2, -canvas.height/2, 1771, 1134);
        ctx.font = '30px Arial';
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        if(currFloor == 0) ctx.fillText('Pinch to Zoom, Drag to Pan', -500, -400);
        //ctx.drawImage(restroomImg, -canvas.width/2 + 550, -canvas.height/2 + 630, 30, 30);
        // draw legend icons
        for(const [type, icon] of Object.entries(iconLocs[currFloor])) {
            let img = icon.img;
            for(const loc of icon.locs) {
                if(type == currentIcon) {
                    ctx.fillStyle = "#ffe14f";
                    ctx.fillRect(-canvas.width/2 + loc[0], -canvas.height/2 + loc[1], 30, 30);
                }
                ctx.drawImage(img, -canvas.width/2 + loc[0], -canvas.height/2 + loc[1], 30, 30);
            }
        }
        
        requestAnimationFrame( draw )
    }

    // Gets the relevant location from a mouse or single touch event
    function getEventLocation(e)
    {
        if (e.touches && e.touches.length == 1)
        {
            return { x:e.touches[0].clientX, y: e.touches[0].clientY }
        }
        else if (e.clientX && e.clientY)
        {
            return { x: e.clientX, y: e.clientY }        
        }
    }

    let isDragging = false
    let dragStart = { x: 0, y: 0 }

    function onPointerDown(e)
    {
        isDragging = true
        dragStart.x = getEventLocation(e).x/cameraZoom - cameraOffset.x
        dragStart.y = getEventLocation(e).y/cameraZoom - cameraOffset.y
    }

    function onPointerUp(e)
    {
        isDragging = false
        initialPinchDistance = null
        lastZoom = cameraZoom
    }

    function onPointerMove(e)
    {
        if (isDragging)
        {
            cameraOffset.x = getEventLocation(e).x/cameraZoom - dragStart.x
            cameraOffset.y = getEventLocation(e).y/cameraZoom - dragStart.y
        }
    }

    function handleTouch(e, singleTouchHandler)
    {
        if ( e.touches.length == 1 )
        {
            singleTouchHandler(e)
        }
        else if (e.type == "touchmove" && e.touches.length == 2)
        {
            isDragging = false
            handlePinch(e)
        }
    }

    let initialPinchDistance = null
    let lastZoom = cameraZoom

    function handlePinch(e)
    {
        e.preventDefault()
        
        let touch1 = { x: e.touches[0].clientX, y: e.touches[0].clientY }
        let touch2 = { x: e.touches[1].clientX, y: e.touches[1].clientY }
        
        // This is distance squared, but no need for an expensive sqrt as it's only used in ratio
        let currentDistance = (touch1.x - touch2.x)**2 + (touch1.y - touch2.y)**2
        
        if (initialPinchDistance == null)
        {
            initialPinchDistance = currentDistance
        }
        else
        {
            adjustZoom( null, currentDistance/initialPinchDistance )
        }
    }

    function adjustZoom(zoomAmount, zoomFactor)
    {
        if (!isDragging)
        {
            if (zoomAmount)
            {
                cameraZoom += zoomAmount
            }
            else if (zoomFactor)
            {
                //console.log(zoomFactor)
                cameraZoom = zoomFactor*lastZoom
            }
            
            cameraZoom = Math.min( cameraZoom, MAX_ZOOM )
            cameraZoom = Math.max( cameraZoom, MIN_ZOOM )
            
            //console.log(zoomAmount)
        }
    }

    canvas.addEventListener('mousedown', onPointerDown)
    canvas.addEventListener('touchstart', (e) => handleTouch(e, onPointerDown))
    canvas.addEventListener('mouseup', onPointerUp)
    canvas.addEventListener('touchend',  (e) => handleTouch(e, onPointerUp))
    canvas.addEventListener('mousemove', onPointerMove)
    canvas.addEventListener('touchmove', (e) => handleTouch(e, onPointerMove))
    canvas.addEventListener( 'wheel', (e) => adjustZoom(e.deltaY*SCROLL_SENSITIVITY))

    document.getElementById('zoomIn').addEventListener('click', (e) => {
        adjustZoom(.75);
    })

    document.getElementById('zoomOut').addEventListener('click', (e) => {
        adjustZoom(-.75);
    })

    document.getElementById('resetMap').addEventListener('click', (e) => {
        cameraZoom = MIN_ZOOM;
        cameraOffset = { x: canvas.width/2, y: canvas.height/2 }
    })

    // close nav button
    document.getElementById('closeNav').addEventListener('click', (e) => {
        console.log(e);
        mapImgs[0].src = 'floor0.png';
        mapImgs[1].src = 'floor1.png';
        document.getElementById('closeNav').style.display = 'none';
    })

    let floorButtons = document.getElementsByClassName('floorSelect');
    for(const el of floorButtons) {
        el.addEventListener('click', (e) => {
            currFloor = el.value;
            for(const b of floorButtons) {
                b.classList.remove('activeFloor');
            }
            el.classList.add('activeFloor');
        });
    }

    let iconButtons = document.getElementsByClassName('legendIcon');
    for(const el of iconButtons) {
        el.addEventListener('click', (e) => {
            // handle drop shadow styling
            for(const b of iconButtons) {
                b.childNodes[1].classList.remove('activeIcon');
            }
            

            // handle map highlighting (and toggle styling edge case)
            let type = el.getAttribute('data-icon');
            if(currentIcon == type) {
                currentIcon = null;
                el.childNodes[1].classList.remove('activeIcon');
            } else {
                currentIcon = type;
                el.childNodes[1].classList.add('activeIcon');
            }
        });
    }

    // function for updating time
    let dateOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'};
    let timeOptions = { hour: 'numeric', minute: '2-digit'};
    function updateDateTime() {
        let dateBox = document.getElementById('headerDate');
        let timeBox = document.getElementById('headerTime');
        let date = new Date();
        dateBox.innerHTML = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
        timeBox.innerHTML = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
    }
    updateDateTime();
    setInterval(updateDateTime, 30000);

    // Ready, set, go
    draw()
};