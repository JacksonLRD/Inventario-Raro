import { CriarMovimentacaoDto } from "../../@types/dto/MovimentacaoDto";

import {
  AlterarColaboradorDto,
  ColaboradorDto,
  RetornoColaboradorCriadoDto,
  RetornoColaboradorEquipamentosCriadoDto,
} from "../dto/ColaboradorDto";

export interface IColaboradorService {
  listar(): Promise<RetornoColaboradorCriadoDto[]>;
  buscar(id: number): Promise<RetornoColaboradorCriadoDto>;
  criar(colaboradorDto: ColaboradorDto): Promise<RetornoColaboradorCriadoDto>;
  atualizar(
    id: number,
    colaboradorDtoAtualizado: AlterarColaboradorDto
  ): Promise<void>;
  geraMovimentacaoColaborador(
    colaboradorId: number,
    authorization: string,
    novaMovimentacao: CriarMovimentacaoDto
  ): Promise<void>;
  inativaColaborador(id: number): Promise<void>;
  remover(id: number): Promise<void>;
  buscarEquipamentoDoColaborador(
    id: number
  ): Promise<RetornoColaboradorEquipamentosCriadoDto>;
}
