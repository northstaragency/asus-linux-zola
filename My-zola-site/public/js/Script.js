function toggleControl(element) {
            element.classList.toggle('active');
        }

        function copyCode(btn) {
            const codeEl = btn.parentElement.querySelector('code');
            if (!codeEl) return;
            const code = codeEl.innerText.replace(/\n/g, '\n');
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(code).then(() => {
                    btn.textContent = 'Copied!';
                    btn.classList.add('copied');
                    document.getElementById('successCheck').classList.add('visible');
                    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
                }).catch(() => {
                    btn.textContent = 'Copy';
                });
            } else {
                // fallback
                const ta = document.createElement('textarea');
                ta.value = code;
                document.body.appendChild(ta);
                ta.select();
                try { document.execCommand('copy'); btn.textContent = 'Copied!'; }
                catch (e) { /* ignore */ }
                document.body.removeChild(ta);
            }
        }

        function markSuccess() {
            
            const el = document.createElement('div');
            el.textContent = 'Thanks — installation confirmed.';
            el.style.position = 'fixed';
            el.style.right = '1rem';
            el.style.bottom = '1rem';
            el.style.background = '#0b0';
            el.style.color = '#001';
            el.style.padding = '0.75rem 1rem';
            el.style.borderRadius = '6px';
            document.body.appendChild(el);
            setTimeout(() => document.body.removeChild(el), 2500);
        }

        function showTroubleshoot() {
            const t = document.getElementById('troubleshoot');
            if (t) t.classList.add('visible');
        }

        (function setupDistroTabs() {
            const distroCommands = {
                arch: 'sudo pacman -S --needed asusctl supergfxctl && sudo systemctl enable --now asusd supergfxd',
                debian: 'Working on it...see installation guide for manual steps.',
                fedora: 'sudo dnf install -y asusctl supergfxctl && sudo systemctl enable --now asusd supergfxd',
                opensuse: 'sudo zypper ar https://download.opensuse.org/repositories/home:/luke_nukem:/asus/openSUSE_Tumbleweed/ asus\nsudo zypper install asusctl'
            };

            document.querySelectorAll('.distro-tab').forEach(tab => {
                tab.addEventListener('click', function () {
                    document.querySelectorAll('.distro-tab').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    const distro = this.dataset.distro;
                    const code = document.getElementById('installCode');
                    if (code) code.textContent = distroCommands[distro] || '';
                    const sc = document.getElementById('successCheck');
                    if (sc) sc.classList.remove('visible');
                });
            });
        })();