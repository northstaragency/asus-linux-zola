(function(){
        const nav = document.querySelector('nav');
        const toggle = document.querySelector('.nav-toggle');
        const navLinks = document.getElementById('primary-navigation');

        if (!nav || !toggle || !navLinks) return;

        function syncNavHeight(){
            const rect = nav.getBoundingClientRect();
            document.documentElement.style.setProperty('--nav-height', Math.ceil(rect.height) + 'px');
        }

        function setOpen(isOpen){
            toggle.setAttribute('aria-expanded', String(!!isOpen));
            if (isOpen){
                navLinks.classList.add('open');
                toggle.setAttribute('aria-label','Close menu');
            } else {
                navLinks.classList.remove('open');
                toggle.setAttribute('aria-label','Open menu');
            }
        }

        toggle.addEventListener('click', function(e){
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
            setOpen(!isOpen);
        });

        document.addEventListener('keydown', function(e){
            if (e.key === 'Escape') setOpen(false);
        });

        document.addEventListener('click', function(e){
            if (!nav.contains(e.target) && navLinks.classList.contains('open')){
                setOpen(false);
            }
        });

        window.addEventListener('resize', function(){
            syncNavHeight();
            if (window.matchMedia('(min-width: 769px)').matches){
                setOpen(false);
            }
        });

        // initial sync
        syncNavHeight();
        window.setTimeout(syncNavHeight, 250);
    })();