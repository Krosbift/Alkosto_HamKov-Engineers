import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  RelationId,
} from 'typeorm';
import { Categoria } from './category.entity';
import { Brand } from './brands.entity';

@Entity({ name: 'productos', schema: 'public' })
export class Product {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column({ name: 'nombre', type: 'varchar', nullable: true })
  nombre?: string | null;

  @Column({ name: 'descripcion', type: 'varchar', nullable: true })
  descripcion?: string | null;

  @Column({ name: 'precio_base', type: 'numeric', nullable: true })
  precioBase?: string | null;

  @Column({ name: 'cantidad', type: 'integer', nullable: true })
  cantidad?: number | null;

  @Column({ name: 'codigo', type: 'varchar', nullable: true })
  codigo?: string | null;

  @Column({ name: 'imagen', type: 'varchar', nullable: true })
  imagen?: string | null;

  @Column({
    name: 'disponibilidad',
    type: 'boolean',
    nullable: true,
    default: () => 'false',
  })
  disponibilidad?: boolean | null;

  @Column({
    name: 'activo',
    type: 'boolean',
    nullable: true,
    default: () => 'true',
  })
  activo?: boolean | null;

  @RelationId((product: Product) => product.categoria)
  idCategoria?: number | null;

  @ManyToOne(() => Categoria, { nullable: true })
  @JoinColumn({ name: 'id_categoria' })
  categoria?: Categoria | null;

  @RelationId((product: Product) => product.marca)
  idMarca?: number | null;

  @ManyToOne(() => Brand, { nullable: true })
  @JoinColumn({ name: 'id_marca' })
  marca?: Brand | null;
}
