'use client';

import styles from './sidebar.module.css';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li className={styles.option}>
          <Image src="/icons8-notification-50.png" alt="Atividade" width={24} height={24} />
          <span>Atividade</span>
        </li>
        <li className={`${styles.option} ${styles.active}`}> {/* Add active class here */}
          <Image src="/icons8-chat-50.png" alt="Chat" width={25} height={25} />
          <span>Chat</span>
        </li>
        <li className={styles.option}>
          <Image src="/icons8-people-48.png" alt="Equipes" width={24} height={24} />
          <span>Equipes</span>
        </li>
        <li className={styles.option}>
          <Image src="/icons8-backpack-50.png" alt="Atribuições" width={22} height={22} />
          <span>Atribuições</span>
        </li>
        <li className={styles.option}>
          <Image src="/icons8-calendar-50.png" alt="Calendário" width={20} height={20} />
          <span>Calendário</span>
        </li>
        <li className={styles.option}>
          <Image src="/file (1).png" alt="Chamadas" width={20} height={20} />
          <span>Chamadas</span>
        </li>
        <li className={styles.option}>
          <Image src="/icons8-onedrive-50.png" alt="OneDrive" width={20} height={20} />
          <span>OneDrive</span>
        </li>
        <li className={styles.option}>
          <Image src="/icons8-more-50.png" alt="..." width={20} height={20} />
        </li>
        <li className={styles.option}>
          <Image src="/icons8-plus-64.png" alt="Aplicativos" width={24} height={24} />
          <span>Aplicativos</span>
        </li>
      </ul>
    </aside>
  );
}
