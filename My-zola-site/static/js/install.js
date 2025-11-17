function switchTab(tabName, btn) {
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            const el = document.getElementById(tabName);
            if (el) el.classList.add('active');
            if (btn && btn.classList) btn.classList.add('active');
        }

        function copyCommand(btn, command) {
            if (!command) return;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(command).then(() => {
                    btn.textContent = 'Copied!';
                    btn.classList.add('copied');
                    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
                }).catch(() => fallbackCopy(btn, command));
            } else {
                fallbackCopy(btn, command);
            }
        }

        function fallbackCopy(btn, text) {
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); btn.textContent = 'Copied!'; btn.classList.add('copied'); }
            catch (e) { /* ignore */ }
            document.body.removeChild(ta);
            setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
        }

        function toggleFAQ(item) {
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        }

        function scrollToHelp() {
            const faqSection = document.querySelector('.faq-section');
            if (faqSection) faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Wire tabs to ensure button reference is passed
        document.querySelectorAll('.tab').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = Array.from(document.querySelectorAll('.tab')).indexOf(btn);
                const ids = ['arch','fedora','ubuntu','opensuse', 'cachyos'];
                const id = ids[idx] || ids[0];
                switchTab(id, btn);
            });
        });

        