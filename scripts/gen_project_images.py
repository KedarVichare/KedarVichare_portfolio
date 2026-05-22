"""Generate themed SVG cover images for the new portfolio projects.

Each project gets a gradient background matching its card gradient,
a thematic glyph drawn with SVG primitives, and the project title.
Output: /public/<slug>.svg
"""

from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public"

W, H = 800, 500


def svg(slug: str, title: str, c1: str, c2: str, glyph: str) -> str:
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img" aria-label="{title}">
  <defs>
    <linearGradient id="bg-{slug}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
  </defs>
  <rect width="{W}" height="{H}" fill="url(#bg-{slug})"/>
  <rect width="{W}" height="{H}" fill="rgba(15,23,42,0.18)"/>
  <g transform="translate(400 210)" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.95">
    {glyph}
  </g>
  <text x="400" y="420" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="34" font-weight="700" fill="#ffffff" letter-spacing="0.5">{title}</text>
</svg>
'''


# Glyph helpers (all centered on origin, drawn small-ish ~ 200x140)
def matrix_grid(rows: int, cols: int, label: str = "") -> str:
    cell = 22
    w = cols * cell
    h = rows * cell
    parts = [f'<rect x="{-w/2}" y="{-h/2}" width="{w}" height="{h}" fill="rgba(255,255,255,0.05)" rx="6"/>']
    for r in range(rows + 1):
        y = -h / 2 + r * cell
        parts.append(f'<line x1="{-w/2}" y1="{y}" x2="{w/2}" y2="{y}"/>')
    for c in range(cols + 1):
        x = -w / 2 + c * cell
        parts.append(f'<line x1="{x}" y1="{-h/2}" x2="{x}" y2="{h/2}"/>')
    if label:
        parts.append(f'<text x="0" y="6" text-anchor="middle" fill="#ffffff" stroke="none" font-family="Inter" font-size="26" font-weight="700">{label}</text>')
    return "\n    ".join(parts)


def nodes_edges() -> str:
    pts = [(-120, -50), (-30, -80), (60, -30), (120, 40), (10, 70), (-90, 50)]
    edges = [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5), (5, 0), (1, 4), (0, 2)]
    lines = [f'<line x1="{pts[a][0]}" y1="{pts[a][1]}" x2="{pts[b][0]}" y2="{pts[b][1]}" opacity="0.7"/>' for a, b in edges]
    circles = [f'<circle cx="{x}" cy="{y}" r="14" fill="rgba(255,255,255,0.95)" stroke="none"/>' for x, y in pts]
    return "\n    ".join(lines + circles)


def waveform() -> str:
    bars = []
    heights = [20, 38, 55, 30, 70, 90, 60, 40, 78, 50, 28, 60, 44, 22, 36]
    x0 = -((len(heights) - 1) * 18) / 2
    for i, hgt in enumerate(heights):
        x = x0 + i * 18
        bars.append(f'<rect x="{x-5}" y="{-hgt/2}" width="10" height="{hgt}" fill="rgba(255,255,255,0.95)" stroke="none" rx="4"/>')
    return "\n    ".join(bars)


def cycle_arrows() -> str:
    return (
        '<circle cx="-70" cy="0" r="48" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.9)"/>\n    '
        '<circle cx="70" cy="0" r="48" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.9)"/>\n    '
        '<path d="M -22 -30 Q 0 -80 22 -30" stroke="#ffffff" marker-end="url(#ah)" />\n    '
        '<path d="M 22 30 Q 0 80 -22 30" stroke="#ffffff" marker-end="url(#ah)" />\n    '
        '<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#ffffff"/></marker></defs>'
    )


def speech_bubble(letter: str) -> str:
    return (
        '<path d="M -130 -60 H 110 a 20 20 0 0 1 20 20 V 30 a 20 20 0 0 1 -20 20 H -70 L -110 90 V 50 H -130 a 20 20 0 0 1 -20 -20 V -40 a 20 20 0 0 1 20 -20 z" fill="rgba(255,255,255,0.18)" />\n    '
        f'<text x="-10" y="14" text-anchor="middle" font-family="Inter" font-size="56" font-weight="800" fill="#ffffff" stroke="none">{letter}</text>'
    )


def book_glyph() -> str:
    return (
        '<rect x="-110" y="-70" width="220" height="140" rx="8" fill="rgba(255,255,255,0.18)"/>\n    '
        '<line x1="0" y1="-70" x2="0" y2="70"/>\n    '
        '<path d="M -90 -50 Q -50 -65 -10 -50" />\n    '
        '<path d="M -90 -20 Q -50 -35 -10 -20" />\n    '
        '<path d="M -90 10 Q -50 -5 -10 10" />\n    '
        '<path d="M 10 -50 Q 50 -65 90 -50" />\n    '
        '<path d="M 10 -20 Q 50 -35 90 -20" />\n    '
        '<path d="M 10 10 Q 50 -5 90 10" />'
    )


def doc_search() -> str:
    return (
        '<rect x="-110" y="-90" width="160" height="200" rx="10" fill="rgba(255,255,255,0.18)"/>\n    '
        '<line x1="-90" y1="-60" x2="30" y2="-60"/>\n    '
        '<line x1="-90" y1="-30" x2="30" y2="-30"/>\n    '
        '<line x1="-90" y1="0" x2="30" y2="0"/>\n    '
        '<line x1="-90" y1="30" x2="-20" y2="30"/>\n    '
        '<circle cx="80" cy="40" r="46" stroke-width="6"/>\n    '
        '<line x1="115" y1="75" x2="150" y2="110" stroke-width="6"/>'
    )


def pipeline_glyph() -> str:
    return (
        '<rect x="-160" y="-30" width="70" height="60" rx="8" fill="rgba(255,255,255,0.2)"/>\n    '
        '<rect x="-50" y="-30" width="70" height="60" rx="8" fill="rgba(255,255,255,0.2)"/>\n    '
        '<rect x="60" y="-30" width="70" height="60" rx="8" fill="rgba(255,255,255,0.2)"/>\n    '
        '<path d="M -90 0 H -50" marker-end="url(#ah2)"/>\n    '
        '<path d="M 20 0 H 60" marker-end="url(#ah2)"/>\n    '
        '<circle cx="160" cy="40" r="22" stroke-width="4"/>\n    '
        '<line x1="178" y1="58" x2="195" y2="78" stroke-width="4"/>\n    '
        '<defs><marker id="ah2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#ffffff"/></marker></defs>'
    )


def agents_grid() -> str:
    pts = [(-80, -50), (80, -50), (-80, 50), (80, 50)]
    parts = []
    for x, y in pts:
        parts.append(f'<rect x="{x-36}" y="{y-26}" width="72" height="52" rx="10" fill="rgba(255,255,255,0.2)"/>')
        parts.append(f'<circle cx="{x}" cy="{y-4}" r="9" fill="#ffffff" stroke="none"/>')
        parts.append(f'<path d="M {x-16} {y+18} Q {x} {y+6} {x+16} {y+18}" />')
    # Center hub
    parts.append('<circle cx="0" cy="0" r="20" fill="rgba(255,255,255,0.3)"/>')
    for x, y in pts:
        parts.append(f'<line x1="0" y1="0" x2="{x}" y2="{y}" opacity="0.6"/>')
    return "\n    ".join(parts)


def diffusion_glyph() -> str:
    parts = []
    for i, x in enumerate([-160, -90, -20, 50, 120]):
        opacity = 0.2 + i * 0.18
        parts.append(f'<rect x="{x-25}" y="-30" width="50" height="60" rx="6" fill="rgba(255,255,255,{opacity})" stroke="none"/>')
        if i < 4:
            parts.append(f'<path d="M {x+28} 0 H {x+42}" marker-end="url(#ah3)"/>')
    parts.append('<defs><marker id="ah3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#ffffff"/></marker></defs>')
    return "\n    ".join(parts)


def transformer_glyph() -> str:
    blocks = []
    for i, y in enumerate([-90, -30, 30, 90]):
        blocks.append(f'<rect x="-80" y="{y-18}" width="160" height="36" rx="8" fill="rgba(255,255,255,0.2)"/>')
        blocks.append(f'<text x="0" y="{y+5}" text-anchor="middle" fill="#ffffff" stroke="none" font-family="Inter" font-size="14" font-weight="600">{"attention" if i % 2 == 0 else "feed-forward"}</text>')
    return "\n    ".join(blocks)


def vae_glyph() -> str:
    return (
        '<polygon points="-160,-80 -40,-30 -40,30 -160,80" fill="rgba(255,255,255,0.2)"/>\n    '
        '<polygon points="160,-80 40,-30 40,30 160,80" fill="rgba(255,255,255,0.2)"/>\n    '
        '<circle cx="0" cy="-20" r="9" fill="#ffffff" stroke="none"/>\n    '
        '<circle cx="0" cy="20" r="9" fill="#ffffff" stroke="none"/>\n    '
        '<circle cx="-25" cy="0" r="9" fill="#ffffff" stroke="none"/>\n    '
        '<circle cx="25" cy="0" r="9" fill="#ffffff" stroke="none"/>'
    )


def gan_glyph() -> str:
    return (
        '<rect x="-150" y="-50" width="100" height="100" rx="12" fill="rgba(255,255,255,0.2)"/>\n    '
        '<text x="-100" y="6" text-anchor="middle" fill="#ffffff" stroke="none" font-family="Inter" font-size="20" font-weight="700">G</text>\n    '
        '<rect x="50" y="-50" width="100" height="100" rx="12" fill="rgba(255,255,255,0.2)"/>\n    '
        '<text x="100" y="6" text-anchor="middle" fill="#ffffff" stroke="none" font-family="Inter" font-size="20" font-weight="700">D</text>\n    '
        '<path d="M -50 0 H 50" marker-end="url(#ah4)"/>\n    '
        '<defs><marker id="ah4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#ffffff"/></marker></defs>'
    )


def medical_scan() -> str:
    return (
        '<rect x="-110" y="-80" width="220" height="160" rx="12" fill="rgba(255,255,255,0.12)"/>\n    '
        '<circle cx="0" cy="0" r="60" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.9)"/>\n    '
        '<path d="M -30 -20 Q 0 -50 30 -20 Q 20 10 0 0 Q -20 10 -30 -20 z" fill="rgba(255,255,255,0.9)" stroke="none"/>\n    '
        '<line x1="-110" y1="-30" x2="110" y2="-30" opacity="0.4"/>\n    '
        '<line x1="-110" y1="30" x2="110" y2="30" opacity="0.4"/>'
    )


def neural_net_glyph() -> str:
    layers = [(-120, [-60, -20, 20, 60]), (-30, [-80, -40, 0, 40, 80]), (60, [-60, -20, 20, 60]), (150, [-30, 30])]
    parts = []
    for i in range(len(layers) - 1):
        for y1 in layers[i][1]:
            for y2 in layers[i + 1][1]:
                parts.append(f'<line x1="{layers[i][0]}" y1="{y1}" x2="{layers[i+1][0]}" y2="{y2}" opacity="0.35" stroke-width="1.5"/>')
    for x, ys in layers:
        for y in ys:
            parts.append(f'<circle cx="{x}" cy="{y}" r="10" fill="#ffffff" stroke="none"/>')
    return "\n    ".join(parts)


def cuda_grid(label: str) -> str:
    return matrix_grid(7, 9, label)


PROJECTS = [
    ("multi-agents-image-generation", "Multi-Agent Image Gen", "#d946ef", "#8b5cf6", agents_grid()),
    ("multimodal-rag-macroeconomics", "Multimodal RAG", "#10b981", "#0ea5e9", doc_search()),
    ("custom-graph-database", "Hierarchical Graph DB", "#6366f1", "#a855f7", nodes_edges()),
    ("twinmind-assignment", "TwinMind Live", "#3b82f6", "#14b8a6", waveform()),
    ("intelligent-pipeline-debugger", "Pipeline Debugger", "#f43f5e", "#f59e0b", pipeline_glyph()),
    ("nlp-sentiment-bilstm", "BiLSTM Sentiment", "#06b6d4", "#3b82f6", speech_bubble("+")),
    ("cyclegan-pytorch", "CycleGAN", "#a855f7", "#ec4899", cycle_arrows()),
    ("moby-dick-lm-suite", "Moby Dick LM", "#f59e0b", "#f97316", book_glyph()),
    ("twitter-sentiment-rnn-pipeline", "Twitter Sentiment", "#0ea5e9", "#06b6d4", speech_bubble("@")),
    ("generative-dcgan-medical", "DCGAN Medical", "#ef4444", "#ec4899", gan_glyph()),
    ("variational-autoencoder-cifar10", "VAE CIFAR-10", "#14b8a6", "#10b981", vae_glyph()),
    ("3d-2d-medical-imaging-cnn", "Medical Imaging CNN", "#84cc16", "#22c55e", medical_scan()),
    ("neural-net-mnist", "Neural Net MNIST", "#eab308", "#f59e0b", speech_bubble("7")),
    ("nlp-pipeline", "NLP Pipeline", "#8b5cf6", "#6366f1", pipeline_glyph()),
    ("generative-diffusion-model", "Diffusion Model", "#ec4899", "#f43f5e", diffusion_glyph()),
    ("gpt-from-scratch", "GPT From Scratch", "#64748b", "#3b82f6", transformer_glyph()),
    ("cuda-matrix-multiply", "CUDA MatMul", "#22c55e", "#10b981", cuda_grid("×")),
    ("cuda-matrix-addition", "CUDA MatAdd", "#10b981", "#84cc16", cuda_grid("+")),
]


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, title, c1, c2, glyph in PROJECTS:
        path = OUT / f"{slug}.svg"
        path.write_text(svg(slug, title, c1, c2, glyph))
        print(f"wrote {path}")


if __name__ == "__main__":
    main()
