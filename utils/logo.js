import React from 'react'
import SabanciDx from '@logos/sabanci_dx'
import SabanciUniv from '@logos/sabanci_univ'
import SaintePulcherie from '@logos/sainte_pulcherie'
import Siemens from '@logos/siemens'

const logos = {
	sabanciDx: SabanciDx,
	sabanciUniv: SabanciUniv,
	saintePulcherie: SaintePulcherie,
	siemens: Siemens,
}

const Logo = ({ name }) => {
	const LogoComponent = logos[name]
	return LogoComponent ? <LogoComponent /> : <svg></svg>
}

export default Logo
