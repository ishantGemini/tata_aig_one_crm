/* eslint-disable no-undef */

declare module "Shared/Header" {
  const Header: React.ComponentType;

  export default Header;
}

declare module "Shared/CustomSharedButton" {
  interface Props {
    text: string;
    className?: string;
    ButtonIcon?: IconType;
    isLoading?: boolean;
    onClick?: any;
    classToOverride?: string;
    type?: any;
  }
  const CustomSharedButton: React.ComponentType<Props>;

  export default CustomSharedButton;
}
