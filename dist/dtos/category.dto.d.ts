export declare class CreateCategoryDto {
    name: String;
    description: String;
}
declare const UpdateCategoryBrand_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCategoryDto>>;
export declare class UpdateCategoryBrand extends UpdateCategoryBrand_base {
}
export {};
