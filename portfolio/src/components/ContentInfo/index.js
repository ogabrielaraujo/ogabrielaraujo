import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiAtSign, FiX } from 'react-icons/fi'

import { Contact } from 'components'
import styles from './style.module.scss'

const ContentInfo = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={styles.content_info}>
      <h1>Gabriel Araujo</h1>
      <h2>Engenheiro de Software</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar
        tincidunt ligula et mattis. Sed sit amet ex ut ligula commodo viverra
        non vulputate metus. Cras ac tempor sapien. Vivamus tristique quam sed
        sapien imperdiet, a venenatis ex fringilla. Nunc vel lectus nisl.{' '}
      </p>

      <div className={styles.social}>
        <a
          href="https://www.linkedin.com/in/ogabrielaraujo/"
          target="_blank"
          title="LinkedIn"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://github.com/ogabrielaraujo"
          target="_blank"
          title="GitHub"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="mailto:gabriiel66@gmail.com"
          target="_blank"
          title="E-mail"
          rel="noreferrer"
        >
          <FiAtSign />
        </a>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1 }}
        onClick={() => setIsActive(true)}
      >
        Entrar em contato
      </motion.button>

      <Contact isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}

export default ContentInfo
