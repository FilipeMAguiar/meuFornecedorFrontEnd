export interface Params {
  subsegmentId: string
}

export interface Provider {
  cidade: string
  cnpj: string
  descricao: string
  emailContato: string
  idFornecedor: string
  instagram: string
  nickFornecedor: string
  nomeFornecedor: string
  nota: number
  numero: string
  site: string
}

export interface Subsegment {
  idSegmento: string
  idSubSegmento: number
  nomeSegmento: string
  nomeSubSegmento: string
  fornecedores: Provider[]
}

export interface Segment {
  idSegmento: string
  nomeSegmento: string
  subSegmentos: Subsegment[]
}
