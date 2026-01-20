// ═══════════════════════════════════════════════════════════
// AINDA HÁ ESPERANÇA - SCRIPT PRINCIPAL
// ═══════════════════════════════════════════════════════════

(function() {
    'use strict';

    // ═══════════════════════════════════════════════════════
    // INICIALIZAÇÃO
    // ═══════════════════════════════════════════════════════

    function init() {
        initLucideIcons();
        initScrollReveal();
        initSmoothScroll();
        initModals();
        initPrayerForm();
        initScrollIndicator();
    }

    // ═══════════════════════════════════════════════════════
    // LUCIDE ICONS
    // ═══════════════════════════════════════════════════════

    function initLucideIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // ═══════════════════════════════════════════════════════
    // SCROLL REVEAL - Animações ao rolar
    // ═══════════════════════════════════════════════════════

    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            revealElements.forEach(el => observer.observe(el));
        } else {
            // Fallback para navegadores sem suporte
            revealElements.forEach(el => el.classList.add('is-visible'));
        }
    }

    // ═══════════════════════════════════════════════════════
    // SMOOTH SCROLL
    // ═══════════════════════════════════════════════════════

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');

                // Ignora links para modais
                if (href === '#contato' || href === '#oracao') {
                    return;
                }

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ═══════════════════════════════════════════════════════
    // MODALS
    // ═══════════════════════════════════════════════════════

    function initModals() {
        const modals = {
            contato: document.getElementById('modal-contato'),
            oracao: document.getElementById('modal-oracao')
        };

        const triggers = {
            contato: document.querySelector('a[href="#contato"]'),
            oracao: document.querySelector('a[href="#oracao"]')
        };

        // Abrir modais
        Object.keys(triggers).forEach(key => {
            if (triggers[key] && modals[key]) {
                triggers[key].addEventListener('click', (e) => {
                    e.preventDefault();
                    openModal(modals[key]);
                });
            }
        });

        // Fechar modais
        Object.values(modals).forEach(modal => {
            if (!modal) return;

            // Botão fechar
            const closeBtn = modal.querySelector('.modal__close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => closeModal(modal));
            }

            // Clique no overlay
            const overlay = modal.querySelector('.modal__overlay');
            if (overlay) {
                overlay.addEventListener('click', () => closeModal(modal));
            }

            // ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('is-active')) {
                    closeModal(modal);
                }
            });
        });
    }

    function openModal(modal) {
        if (!modal) return;

        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden';

        // Foco no primeiro elemento focável
        setTimeout(() => {
            const firstFocusable = modal.querySelector('button, a, input, textarea');
            if (firstFocusable) firstFocusable.focus();
        }, 100);
    }

    function closeModal(modal) {
        if (!modal) return;

        modal.classList.remove('is-active');
        document.body.style.overflow = '';
    }

    // ═══════════════════════════════════════════════════════
    // FORMULÁRIO DE ORAÇÃO
    // ═══════════════════════════════════════════════════════

    function initPrayerForm() {
        const form = document.getElementById('prayer-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const textarea = form.querySelector('textarea');
            const submitBtn = form.querySelector('button[type="submit"]');
            const prayerText = textarea.value.trim();

            // Desabilita o botão durante o envio
            submitBtn.disabled = true;
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i data-lucide="loader" class="spinning"></i><span>Enviando...</span>';
            lucide.createIcons();

            try {
                // Aqui você pode adicionar integração com backend/API
                // Por exemplo: enviar para um webhook, Google Forms, etc.

                // Simulação de envio
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Sucesso
                showSuccessMessage(form);
                textarea.value = '';

                // Fecha o modal após 2 segundos
                setTimeout(() => {
                    const modal = document.getElementById('modal-oracao');
                    closeModal(modal);
                }, 2000);

            } catch (error) {
                console.error('Erro ao enviar:', error);
                alert('Desculpe, ocorreu um erro. Tente novamente mais tarde.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                lucide.createIcons();
            }
        });
    }

    function showSuccessMessage(form) {
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.innerHTML = `
            <i data-lucide="check-circle"></i>
            <p>Recebemos seu pedido. Estamos orando por você. ❤️</p>
        `;

        // CSS inline para mensagem de sucesso
        successMsg.style.cssText = `
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px;
            background-color: #D4F4DD;
            border-radius: 8px;
            margin-top: 16px;
            color: #1F3D2B;
        `;

        form.appendChild(successMsg);
        lucide.createIcons();

        setTimeout(() => {
            successMsg.remove();
        }, 3000);
    }

    // ═══════════════════════════════════════════════════════
    // SCROLL INDICATOR (Hero)
    // ═══════════════════════════════════════════════════════

    function initScrollIndicator() {
        const indicator = document.querySelector('.hero__scroll-indicator');
        if (!indicator) return;

        indicator.addEventListener('click', () => {
            const nextSection = document.querySelector('#nao-foi-acaso');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Esconde o indicador ao rolar
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                indicator.style.opacity = '0';
            } else {
                indicator.style.opacity = '0.7';
            }

            lastScroll = currentScroll;
        });
    }

    // ═══════════════════════════════════════════════════════
    // PARALLAX SUAVE (Hero Background)
    // ═══════════════════════════════════════════════════════

    function initParallax() {
        const heroBackground = document.querySelector('.hero__background');
        if (!heroBackground) return;

        // Apenas em desktop
        if (window.innerWidth > 768) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallaxSpeed = 0.5;
                heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            });
        }
    }

    // ═══════════════════════════════════════════════════════
    // ANALYTICS (opcional)
    // ═══════════════════════════════════════════════════════

    function trackEvent(category, action, label) {
        // Integração futura com Google Analytics, Plausible, etc.
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }

        console.log(`[Analytics] ${category} - ${action} - ${label}`);
    }

    // Rastrear cliques nos CTAs
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const text = this.textContent.trim();
            trackEvent('CTA', 'click', text);
        });
    });

    // ═══════════════════════════════════════════════════════
    // PRELOAD DE IMAGENS CRÍTICAS
    // ═══════════════════════════════════════════════════════

    function preloadImages() {
        const criticalImages = [
            'https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2000',
            'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?q=80&w=1200'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    // ═══════════════════════════════════════════════════════
    // DETECÇÃO DE PERFORMANCE
    // ═══════════════════════════════════════════════════════

    function detectSlowConnection() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

        if (connection) {
            const type = connection.effectiveType;

            // Se a conexão for lenta, reduz animações
            if (type === 'slow-2g' || type === '2g') {
                document.documentElement.classList.add('reduced-motion');
                console.log('[Performance] Conexão lenta detectada, reduzindo animações');
            }
        }
    }

    // ═══════════════════════════════════════════════════════
    // INICIALIZAÇÃO NO CARREGAMENTO
    // ═══════════════════════════════════════════════════════

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Inicializa recursos adicionais
    window.addEventListener('load', () => {
        initParallax();
        detectSlowConnection();
    });

    // ═══════════════════════════════════════════════════════
    // EASTER EGG (opcional - mensagem no console)
    // ═══════════════════════════════════════════════════════

    console.log('%c✨ Ainda há esperança ✨', 'font-size: 24px; color: #1F3D2B; font-weight: bold;');
    console.log('%cSe você está lendo isso, saiba que não foi por acaso.', 'font-size: 14px; color: #666;');
    console.log('%cVocê é valorizado. Você é amado.', 'font-size: 14px; color: #D4AF37;');

})();
