"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogoEletronico = void 0;
const ItemAcervo_1 = require("./ItemAcervo");
class JogoEletronico extends ItemAcervo_1.ItemAcervo {
    _plataforma;
    _classificacaoIndicativa;
    constructor(titulo, anoPublicacao, _plataforma, _classificacaoIndicativa) {
        super(titulo, anoPublicacao);
        this._plataforma = _plataforma;
        this._classificacaoIndicativa = _classificacaoIndicativa;
    }
    get plataforma() {
        return this._plataforma;
    }
    get classificacaoIndicativa() {
        return this._classificacaoIndicativa;
    }
    calcularMulta(diasAtraso) {
        if (diasAtraso <= 0)
            return 0;
        return diasAtraso * 5.0;
    }
}
exports.JogoEletronico = JogoEletronico;
