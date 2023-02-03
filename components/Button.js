import styles from './Button.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image';

export function ConnectButton({ title, link }) {
  const router = useRouter();
  return (
    <button
      className={styles.ConnectButton}
      onClick={() => router.push(link)}
    >
      {title}
    </button>
  )
}

export function PrimaryButton({ title, img, link }) {
  const router = useRouter();
  return (
    <button
      className={styles.PrimaryButton}
      onClick={() => router.push(link)}
    >
      {img &&
        <Image
          src={img}
          alt="Wishlist"
          width={18}
          height={18}
          style={{ marginRight: '16px', marginBottom: '-4px' }}
          priority
        />
      }
      {title}
    </button>
  )
}