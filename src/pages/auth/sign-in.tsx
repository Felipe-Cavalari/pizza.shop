import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { singIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export default function SignIn() {
  const [searchParams] = useSearchParams()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: singIn,
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email })

      toast.success('Sucesso', {
        action: {
          label: 'Acessar Painel',
          onClick: () => handleSignIn(data),
        },
      })
      console.log(data)
    } catch {
      toast.error('Ops tivemos um problema')
    }
  }

  return (
    <div>
      <Helmet title="Sign in" />
      <div className="p-8">
        <Button className="absolute right-20 top-5" variant={'outline'}>
          <Link to={'/sign-up'}>Novo estabelecimento</Link>
        </Button>
        <div className="flex w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel de parceiro
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="space-y-2">
              <Label>Seu e-mail</Label>
              <Input {...register('email')} />
            </div>
            <Button disabled={isSubmitting}>Acessar painel</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
