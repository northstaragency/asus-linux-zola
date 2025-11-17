// Custom Cursor
        const cursor = document.querySelector('.cursor');
        const cursorGlow = document.querySelector('.cursor-glow');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorGlow.style.left = (e.clientX - 150) + 'px';
            cursorGlow.style.top = (e.clientY - 150) + 'px';
        });

        // Cursor interactions
        const interactives = document.querySelectorAll('a, button, .playbook-card, .filter-btn, input');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });

        // Playbooks Data
        const playbooks = [
            {
                id: 'gpu-switch',
                title: 'Switch to iGPU for battery',
                outcome: 'Disable the dedicated GPU to maximize battery life on the go',
                time: '2 min',
                level: 'Beginner',
                completionRate: '94%',
                category: 'graphics',
                featured: true,
                devices: ['G14', 'G15', 'X13'],
                steps: [
                    {
                        title: 'Open Terminal {Alarcity, kitty, or konsole recommended}',
                        instruction: 'Launch the app from your applications menu or press Super',
                        why: 'The Terminal is where you can run system commands',
                        expected: 'You should see the command prompt'
                    },
                    {
                        title: 'Navigate to GPU settings',
                        instruction: 'Write "supergfxctl -g" and press Enter',
                        why: 'This is where you can see avaliable GPU modes',
                        expected: 'Current mode will be highlighted'
                    },
                    {
                        title: 'Select iGPU mode',
                        instruction: 'Choose "Integrated" from the GPU mode options',
                        why: 'Integrated graphics use significantly less power than the dGPU',
                        code: 'supergfxctl -m Integrated',
                        expected: '"Reboot required" badge appears'
                    },
                    {
                        title: 'Reboot when ready',
                        instruction: 'logout now or reboot manually later',
                        why: 'GPU switching requires a full system restart to take effect',
                        expected: 'System reboots and applies the new GPU mode'
                    }
                ],
                undo: 'Return to GPU settings and select "Hybrid" or anyother mode, then reboot',
                related: 'Enable per-app dGPU'
            },
            {
                id: 'quiet-fans',
                title: 'Quiet fans at night',
                outcome: 'Keep fan noise under 30dB for late-night work or study',
                time: '1 min',
                level: 'Beginner',
                completionRate: '97%',
                category: 'performance',
                featured: true,
                devices: ['G14', 'G15', 'X13', 'M16'],
                steps: [
                    {
                        title: 'Open fan controls',
                        instruction: 'In ROG Control Center, click "Fans" in the sidebar',
                        why: 'Access custom fan curve settings',
                        expected: 'Fan curve editor appears'
                    },
                    {
                        title: 'Select Quiet preset',
                        instruction: 'Choose "Quiet" from the preset dropdown',
                        why: 'Quiet preset limits fan speed to maintain low noise levels',
                        expected: 'Fan curve adjusts to gentle slope'
                    },
                    {
                        title: 'Apply and test',
                        instruction: 'Click "Apply" and monitor fan noise',
                        why: 'Changes take effect immediately without reboot',
                        code: 'asusctl fan-curve -p quiet',
                        expected: 'Fans spin down to quieter levels'
                    }
                ],
                undo: 'Return to Fans and select "Balanced" or "Performance" preset',
                related: 'Performance mode for gaming'
            },
            {
                id: 'battery-cap',
                title: 'Charge to 80% cap',
                outcome: 'Extend battery lifespan by limiting charge to 80%',
                time: '30 sec',
                level: 'Beginner',
                completionRate: '98%',
                category: 'battery',
                featured: true,
                devices: ['All'],
                steps: [
                    {
                        title: 'Open battery settings',
                        instruction: 'Navigate to "Battery" in ROG Control Center',
                        why: 'Battery care settings protect long-term battery health',
                        expected: 'Current charge limit displayed'
                    },
                    {
                        title: 'Set 80% cap',
                        instruction: 'Move the slider to 80% or click the "80%" quick button',
                        why: 'Limiting to 80% reduces battery stress and extends lifespan',
                        code: 'asusctl -c 80',
                        expected: 'Charge limit indicator shows 80%'
                    },
                    {
                        title: 'Verify',
                        instruction: 'Check that "Battery Care: On" shows in the status',
                        why: 'Confirms the setting is active',
                        expected: 'Charging stops at 80%'
                    }
                ],
                undo: 'Set charge limit to 100% for one-time full charge',
                related: 'One-time 100% charge'
            },
            {
                id: 'fix-sound',
                title: 'Fix no sound issue',
                outcome: 'Resolve common audio problems on ROG laptops',
                time: '2 min',
                level: 'Beginner',
                completionRate: '89%',
                category: 'audio',
                featured: true,
                devices: ['G14', 'G15'],
                steps: [
                    {
                        title: 'Check audio output',
                        instruction: 'Right-click sound icon and select "Sound Settings"',
                        why: 'Verify the correct output device is selected',
                        expected: 'Speakers or headphones shown as output'
                    },
                    {
                        title: 'Install audio fix',
                        instruction: 'Run the ROG audio configuration script',
                        why: 'Applies codec-specific fixes for ASUS hardware',
                        code: 'sudo asusctl audio-fix',
                        expected: 'Script completes with "Audio configured successfully"'
                    },
                    {
                        title: 'Reboot',
                        instruction: 'Restart your system for changes to take effect',
                        why: 'Audio driver changes require a reboot',
                        expected: 'Sound works after restart'
                    }
                ],
                undo: 'Run: sudo asusctl audio-reset',
                related: 'Audio troubleshooting guide'
            },
            {
                id: 'performance-gaming',
                title: 'Performance mode for gaming',
                outcome: 'Unlock maximum performance with one click',
                time: '1 min',
                level: 'Beginner',
                completionRate: '96%',
                category: 'performance',
                devices: ['All'],
                steps: [
                    {
                        title: 'Select Performance profile',
                        instruction: 'In the main dashboard, click "Performance"',
                        why: 'Boosts CPU clocks and removes power limits',
                        expected: 'Profile switches to Performance'
                    },
                    {
                        title: 'Verify settings',
                        instruction: 'Check that GPU is set to dGPU and fans to Aggressive',
                        why: 'Performance mode enables full hardware capability',
                        expected: 'All settings adjusted for maximum performance'
                    }
                ],
                undo: 'Select "Balanced" or "Silent" profile from dashboard',
                related: 'Per-app profiles'
            },
            {
                id: 'per-app-dgpu',
                title: 'Enable per-app dGPU',
                outcome: 'Auto-switch to dedicated GPU for specific apps',
                time: '3 min',
                level: 'Intermediate',
                completionRate: '87%',
                category: 'graphics',
                devices: ['G14', 'G15', 'X13'],
                steps: [
                    {
                        title: 'Open per-app settings',
                        instruction: 'Navigate to "Graphics" → "Per-App Profiles"',
                        why: 'Configure which apps trigger GPU switching',
                        expected: 'List of configured apps appears'
                    },
                    {
                        title: 'Add application',
                        instruction: 'Click "Add App" and select your game executable',
                        why: 'Tells the system which apps need the dGPU',
                        expected: 'App added to list'
                    },
                    {
                        title: 'Set GPU preference',
                        instruction: 'Choose "Dedicated GPU" for the app',
                        why: 'Ensures maximum graphics performance when app runs',
                        expected: 'dGPU icon appears next to app'
                    },
                    {
                        title: 'Test',
                        instruction: 'Launch the app and verify GPU usage in status panel',
                        why: 'Confirms automatic switching works',
                        expected: 'dGPU activates when app launches'
                    }
                ],
                undo: 'Remove app from per-app list or set to "Auto"',
                related: 'GPU switching guide'
            },
            {
                id: 'oled-care',
                title: 'OLED panel care',
                outcome: 'Prevent burn-in with automatic pixel refresh',
                time: '2 min',
                level: 'Intermediate',
                completionRate: '92%',
                category: 'graphics',
                devices: ['X13', 'Flow'],
                steps: [
                    {
                        title: 'Display refresh options',
                        instruction: 'Run a full-screen noise generator or screensaver like xscreensaver"',
                        why: 'Access panel protection features',
                        expected: 'OLED care options displayed'
                    },
                    {
                        title: 'Enable pixel shift',
                        instruction: 'Install "xscreensaver" and enable pixel shift mode "pacman -S xscreensaver"',
                        why: 'Slightly shifts content to prevent static image burn-in',
                        expected: 'Pixel shift activates'
                    },
                    {
                        title: 'Schedule refresh',
                        instruction: 'Set xscreensaver-command -activate to run every 4 hours via cron job',
                        why: 'Periodic refresh maintains panel health',
                        expected: 'Refresh scheduled'
                    }
                ],
                undo: 'Disable pixel shift and remove refresh schedule',
                related: 'Display calibration'
            },
            {
                id: 'reset-safe',
                title: 'Reset everything safely',
                outcome: 'Return all settings to factory defaults',
                time: '30 sec',
                level: 'Beginner',
                completionRate: '99%',
                category: 'troubleshooting',
                devices: ['All'],
                steps: [
                    {
                        title: 'Open settings',
                        instruction: 'Click the gear icon in ROG Control Center',
                        why: 'Access system-wide configuration',
                        expected: 'Settings panel opens'
                    },
                    {
                        title: 'Reset to defaults',
                        instruction: 'Click "Reset All Settings" at the bottom',
                        why: 'Clears all customizations and returns to safe defaults',
                        code: 'asusctl reset-all',
                        expected: 'Confirmation dialog appears'
                    },
                    {
                        title: 'Confirm',
                        instruction: 'Click "Yes, Reset" to proceed',
                        why: 'Final confirmation prevents accidental resets',
                        expected: 'All settings return to defaults'
                    }
                ],
                undo: 'Manually reconfigure settings as needed',
                related: null
            }
        ];

        // Render playbook card
        function renderCard(playbook) {
            return `
                <a href="#${playbook.id}" class="playbook-card" onclick="openDetail('${playbook.id}'); return false;">
                    <div class="card-header">
                        <div>
                            <h3 class="card-title">${playbook.title}</h3>
                        </div>
                        ${playbook.completionRate ? `<span class="completion-badge">${playbook.completionRate}</span>` : ''}
                    </div>
                    <p class="card-outcome">${playbook.outcome}</p>
                    <div class="card-meta">
                        <span class="meta-item"><span class="meta-icon">⏱</span> ${playbook.time}</span>
                        <span class="meta-item"><span class="meta-icon">📊</span> ${playbook.level}</span>
                    </div>
                    <div class="works-on">
                        ${playbook.devices.map(d => `<span class="device-icon" title="${d}">${d}</span>`).join('')}
                    </div>
                </a>
            `;
        }

        // Populate grids and update counts
        function populateGrids() {
            const featured = playbooks.filter(p => p.featured);
            const performance = playbooks.filter(p => p.category === 'performance');
            const graphics = playbooks.filter(p => p.category === 'graphics');
            const battery = playbooks.filter(p => p.category === 'battery');
            const audio = playbooks.filter(p => p.category === 'audio');
            const troubleshooting = playbooks.filter(p => p.category === 'troubleshooting');

            document.getElementById('featuredGrid').innerHTML = featured.map(renderCard).join('');
            document.getElementById('performanceGrid').innerHTML = performance.map(renderCard).join('');
            document.getElementById('graphicsGrid').innerHTML = graphics.map(renderCard).join('');
            document.getElementById('batteryGrid').innerHTML = battery.map(renderCard).join('');
            document.getElementById('audioGrid').innerHTML = audio.map(renderCard).join('');
            document.getElementById('troubleshootingGrid').innerHTML = troubleshooting.map(renderCard).join('');

            // Update counts
            document.getElementById('performanceCount').textContent = `${performance.length} ${performance.length === 1 ? 'guide' : 'guides'}`;
            document.getElementById('graphicsCount').textContent = `${graphics.length} ${graphics.length === 1 ? 'guide' : 'guides'}`;
            document.getElementById('batteryCount').textContent = `${battery.length} ${battery.length === 1 ? 'guide' : 'guides'}`;
            document.getElementById('audioCount').textContent = `${audio.length} ${audio.length === 1 ? 'guide' : 'guides'}`;
            document.getElementById('troubleshootingCount').textContent = `${troubleshooting.length} ${troubleshooting.length === 1 ? 'guide' : 'guides'}`;
        }

        // Open detail view
        function openDetail(id) {
            const playbook = playbooks.find(p => p.id === id);
            if (!playbook) return;

            const detailContent = `
                <div class="detail-hero">
                    <h2>${playbook.title}</h2>
                    <p class="card-outcome">${playbook.outcome}</p>
                    <div class="hero-meta">
                        <div class="hero-meta-item">
                            <span class="hero-meta-label">Time to complete</span>
                            <span class="hero-meta-value">${playbook.time}</span>
                        </div>
                        <div class="hero-meta-item">
                            <span class="hero-meta-label">Skill level</span>
                            <span class="hero-meta-value">${playbook.level}</span>
                        </div>
                        <div class="hero-meta-item">
                            <span class="hero-meta-label">Success rate</span>
                            <span class="hero-meta-value" style="color: var(--accent-green);">${playbook.completionRate}</span>
                        </div>
                    </div>
                </div>

                <div class="preflight">
                    <h3>Preflight Checks</h3>
                    <div class="check-item">
                        <span class="check-icon pass">✓</span>
                        <span>ROG Control Center installed</span>
                    </div>
                    <div class="check-item">
                        <span class="check-icon pass">✓</span>
                        <span>Model detected: ROG Zephyrus G14</span>
                    </div>
                    <div class="check-item">
                        <span class="check-icon pass">✓</span>
                        <span>Required privileges available</span>
                    </div>
                </div>

                <div class="progress-tracker">
                    <span class="progress-text">Progress: <strong>0 of ${playbook.steps.length}</strong></span>
                    ${playbook.steps.map((_, i) => `<div class="progress-dot">${i + 1}</div>`).join('')}
                </div>

                ${playbook.steps.map((step, index) => `
                    <div class="step-block" id="step-${index}">
                        <div class="step-header">
                            <div>
                                <div class="step-number">STEP ${index + 1} OF ${playbook.steps.length}</div>
                                <h3 class="step-title">${step.title}</h3>
                            </div>
                        </div>
                        <p class="step-instruction">${step.instruction}</p>
                        ${step.why ? `<div class="step-why">💡 <strong>Why this helps:</strong> ${step.why}</div>` : ''}
                        ${step.code ? `
                            <div class="code-block">
                                <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                                <code>${step.code}</code>
                            </div>
                        ` : ''}
                        ${step.expected ? `
                            <div class="expected-output">
                                <span class="expected-pill">Expected</span>
                                <span>${step.expected}</span>
                            </div>
                        ` : ''}
                        <div class="step-actions">
                            <button class="btn btn-primary" onclick="confirmStep(${index}, ${playbook.steps.length})">✓ Confirm Step</button>
                        </div>
                        <div class="troubleshoot">
                            <div class="troubleshoot-toggle" onclick="toggleTroubleshoot(${index})">
                                ⚠️ Having issues? Click for help →
                            </div>
                            <div class="troubleshoot-content" id="troubleshoot-${index}">
                                <div class="troubleshoot-item">
                                    <div class="troubleshoot-title">Common issue: Command not found</div>
                                    <p>Make sure ROG Control Center is installed. Run: <code>which asusctl</code> to verify.</p>
                                </div>
                                <div class="troubleshoot-item">
                                    <div class="troubleshoot-title">Common issue: Permission denied</div>
                                    <p>Prefix the command with <code>sudo</code> and enter your password when prompted.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}

                <div class="safety-strip">
                    <span class="safety-icon">🛡️</span>
                    <div class="safety-text">
                        <div class="safety-title">This is reversible</div>
                        <div class="safety-undo"><strong>To undo:</strong> ${playbook.undo}</div>
                    </div>
                </div>

                <div class="finish-screen" id="finishScreen">
                    <div class="finish-icon">🎉</div>
                    <h2 class="finish-title">Success!</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 1.1rem;">You've completed "${playbook.title}"</p>
                    ${playbook.related ? `
                        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
                            Ready for more? Try: <strong>${playbook.related}</strong>
                        </p>
                    ` : ''}
                    <div class="finish-actions">
                        <button class="btn btn-secondary">Save as preset</button>
                        <button class="btn btn-secondary">Create shortcut</button>
                    </div>
                    
                    <div class="feedback-widget">
                        <div class="feedback-question">Did this work?</div>
                        <div class="feedback-buttons">
                            <button class="feedback-btn" onclick="selectFeedback(this, 'yes')">👍 Yes</button>
                            <button class="feedback-btn" onclick="selectFeedback(this, 'no')">👎 No</button>
                        </div>
                        <textarea class="feedback-notes" placeholder="Optional: Share your experience or suggest improvements..."></textarea>
                        <button class="btn btn-primary" style="margin-top: 1rem; width: 100%;">Submit Feedback</button>
                    </div>
                </div>
            `;

            document.querySelector('.detail-content').innerHTML = detailContent;
            document.getElementById('detailView').classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Reset progress
            completedSteps = 0;
        }

        // Close detail view
        function closeDetail() {
            document.getElementById('detailView').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Confirm step
        let completedSteps = 0;
        function confirmStep(stepIndex, totalSteps) {
            const stepBlock = document.getElementById(`step-${stepIndex}`);
            stepBlock.classList.add('completed');
            
            const progressDots = document.querySelectorAll('.progress-dot');
            progressDots[stepIndex].classList.add('completed');
            progressDots[stepIndex].classList.remove('active');
            
            completedSteps++;
            document.querySelector('.progress-text strong').textContent = `${completedSteps} of ${totalSteps}`;
            
            if (completedSteps === totalSteps) {
                document.getElementById('finishScreen').classList.add('visible');
                document.getElementById('finishScreen').scrollIntoView({ behavior: 'smooth' });
            } else {
                const nextStep = document.getElementById(`step-${stepIndex + 1}`);
                if (nextStep) {
                    progressDots[stepIndex + 1].classList.add('active');
                    nextStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        }

        // Toggle troubleshoot
        function toggleTroubleshoot(index) {
            const content = document.getElementById(`troubleshoot-${index}`);
            content.classList.toggle('visible');
        }

        // Copy code
        function copyCode(btn) {
            const code = btn.parentElement.querySelector('code').innerText;
            navigator.clipboard.writeText(code);
            btn.textContent = 'Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = 'Copy';
                btn.classList.remove('copied');
            }, 2000);
        }

        // Feedback selection
        function selectFeedback(btn, value) {
            document.querySelectorAll('.feedback-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        }

        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const filterGroup = this.parentElement;
                filterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Re-add cursor interactions to new elements
                this.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.5)');
                this.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
            });
        });

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.playbook-card');
            
            cards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const outcome = card.querySelector('.card-outcome').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || outcome.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        // Keyboard shortcut to close detail
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.getElementById('detailView').classList.contains('active')) {
                closeDetail();
            }
        });

        // Initialize
        populateGrids();

        // Re-attach cursor events after content loads
        setTimeout(() => {
            document.querySelectorAll('a, button, .playbook-card, .filter-btn, input').forEach(el => {
                el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.5)');
                el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
            });
        }, 100);