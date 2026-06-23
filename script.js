// Menu Mobile
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Calculadora de Impacto Ambiental
function calcularImpacto() {
    const area = parseFloat(document.getElementById('area').value) || 100;
    
    // Estimativas realistas
    const co2Economizado = Math.round(area * 42);        // toneladas de CO₂ por ano
    const aguaEconomizada = Math.round(area * 8500);     // litros por ano
    const biodiversidade = Math.round(area * 3.5);       // espécies beneficiadas

    const resultadoHTML = `
        <div class="resultados">
            <h4>📊 Resultado para <strong>${area} hectares</strong></h4>
            <p><strong>-${co2Economizado} toneladas</strong> de CO₂ evitadas/ano</p>
            <p><strong>${aguaEconomizada.toLocaleString()} litros</strong> de água economizados/ano</p>
            <p><strong>+${biodiversidade}</strong> espécies beneficiadas</p>
        </div>
    `;

    document.getElementById('resultado').innerHTML = resultadoHTML;
}

// Quiz de Sustentabilidade
let quizData = [
    {
        pergunta: "Qual é a principal vantagem da agricultura de precisão?",
        opcoes: [
            "Aumentar o uso de agrotóxicos",
            "Otimizar o uso de água e fertilizantes",
            "Expandir o desmatamento",
            "Reduzir a produtividade"
        ],
        correta: 1
    },
    {
        pergunta: "O que significa agricultura regenerativa?",
        opcoes: [
            "Plantar apenas monoculturas",
            "Recuperar a saúde do solo e da biodiversidade",
            "Usar o máximo de irrigação possível",
            "Eliminar todas as árvores das propriedades"
        ],
        correta: 1
    }
];

let perguntaAtual = 0;

function carregarQuiz() {
    const quiz = quizData[perguntaAtual];
    document.getElementById('pergunta').textContent = quiz.pergunta;

    let opcoesHTML = '';
    quiz.opcoes.forEach((opcao, index) => {
        opcoesHTML += `
            <button onclick="responder(${index})" class="opcao-btn">
                ${opcao}
            </button>
        `;
    });

    document.getElementById('opcoes').innerHTML = opcoesHTML;
    document.getElementById('quiz-result').classList.add('hidden');
}

function responder(indice) {
    const quiz = quizData[perguntaAtual];
    const resultDiv = document.getElementById('quiz-result');
    
    if (indice === quiz.correta) {
        resultDiv.innerHTML = `
            <p class="correct">✅ Resposta Correta!</p>
        `;
    } else {
        resultDiv.innerHTML = `
            <p class="wrong">❌ Resposta Incorreta.</p>
            <p class="small">A resposta certa era: <strong>${quiz.opcoes[quiz.correta]}</strong></p>
        `;
    }
    
    resultDiv.classList.remove('hidden');

    // Próxima pergunta após 3 segundos
    setTimeout(() => {
        perguntaAtual = (perguntaAtual + 1) % quizData.length;
        carregarQuiz();
    }, 3200);
}

// Formulário de Contato
function enviarMensagem(e) {
    e.preventDefault();
    
    const nome = document.querySelector('input[type="text"]').value;
    
    alert(`✅ Obrigado, ${nome || 'amigo'}! 
Sua mensagem foi enviada com sucesso.

Agro Forte agradece seu interesse pela agricultura sustentável! 🌱`);
    
    e.target.reset();
}

// Smooth Scroll para links internos
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Inicia o quiz
    carregarQuiz();
    
    // Smooth scroll
    smoothScroll();
    
    // Calcular impacto inicial
    setTimeout(() => {
        calcularImpacto();
    }, 800);

    // Fechar menu mobile ao clicar em um link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.add('hidden');
        });
    });
});
