export class UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  rating?: string;
  categories?: string[]; // using names instead of IDs
}
