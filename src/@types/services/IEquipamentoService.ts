import {
  AtualizarEquipamentoDto,
  CriarEquipamentoDto,
  RetornoEquipamentoDto,
} from "../dto/EquipamentoDto";
export interface IEquipamentoService {
  criarEquipamento(
    token: string | string[],
    equipamentoDto: CriarEquipamentoDto
  ): Promise<RetornoEquipamentoDto>;
  listarEquipamentos(): Promise<RetornoEquipamentoDto[]>;
  inativarEquipamento(authorization: string, id: number): Promise<void>;
  atualizarEquipamento(
    id: number,
    equipamentoDto: AtualizarEquipamentoDto
  ): Promise<void>;
  buscarEquipamento(id: number): Promise<RetornoEquipamentoDto>;
}
