import Exit from '../../../../assets/icons/exit.svg'
import Logo from '../../../../assets/icons/logo.svg'
import Menu from '../../../../assets/icons/menu.svg'
import Plus from '../../../../assets/icons/plus.svg'
import Trash from '../../../../assets/icons/trash.svg'

export type IIconMapper = keyof typeof iconMapper

export const iconMapper = {
  exit: Exit,
  logo: Logo,
  menu: Menu,
  plus: Plus,
  trash: Trash
}
