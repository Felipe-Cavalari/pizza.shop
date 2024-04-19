import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerRestaurant } from '@/api/register-restaurant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export default function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerRestaurantFn({
        email: data.email,
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        phone: data.phone,
      })

      toast.success('Sucesso', {
        action: {
          label: 'Logar',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
      console.log(data)
    } catch {
      toast.error('Ops tivemos um problema')
    }
  }

  return (
    <div>
      <Helmet title="Sign up" />

      <div className="p-8">
        <Button className="absolute right-20 top-5" variant={'outline'}>
          <Link to={'/sign-in'}>Acessar painel</Link>
        </Button>
        <div className="flex w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro a comece suas vendas!
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className="space-y-2">
              <Label>Nome do estabelecimento</Label>
              <Input {...register('restaurantName')} />
            </div>
            <div className="space-y-2">
              <Label>Seu nome</Label>
              <Input {...register('managerName')} />
            </div>
            <div className="space-y-2">
              <Label>Seu e-mail</Label>
              <Input {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label>Seu celular</Label>
              <Input {...register('phone')} />
            </div>

            <Button disabled={isSubmitting}>Finalizar cadastro</Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos termos de prividade
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
